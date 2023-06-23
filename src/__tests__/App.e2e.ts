//Warning before run .e2e test you must run before: npm run dev
import puppeteer from 'puppeteer'
import type { Page, Browser } from 'puppeteer'

describe('User test App.e2e.ts', () => {
  let browser: Browser
  let page: Page

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: 'new' })
    page = await browser.newPage()
  })
  afterAll(async () => await browser.close())

  it('contains This is home page', async () => {
    await page.goto('http://localhost:3000')
    await page.waitForSelector('[data-testid="home-page"]')
    const text = await page.$eval('[data-testid="home-page"]', (e) => e.textContent)
    expect(text).toContain('Подаруй другу шанс')
  })

  describe('Test header navigate to other pages', () => {
    it('should navigate to the home page', async () => {
      const link = await page.waitForSelector('[data-testid="home-link"]')
      link?.click()
      await page.waitForNavigation()
      const currentURL = page.url()
      expect(currentURL).toBe('http://localhost:3000/Big-lapa/')
    })

    it('should navigate to the dogs page', async () => {
      const link = await page.waitForSelector('[data-testid="dogs-link"]')
      link?.click()
      await page.waitForNavigation()
      const currentURL = page.url()
      expect(currentURL).toBe('http://localhost:3000/Big-lapa/dogs')
    })

    it('should navigate to the about page', async () => {
      const link = await page.waitForSelector('[data-testid="about-link"]')
      link?.click()
      await page.waitForNavigation()
      const currentURL = page.url()
      expect(currentURL).toBe('http://localhost:3000/Big-lapa/about')
    })

    it('should navigate to the contacts page', async () => {
      const link = await page.waitForSelector('[data-testid="contacts-link"]')
      link?.click()
      await page.waitForNavigation()
      const currentURL = page.url()
      expect(currentURL).toBe('http://localhost:3000/Big-lapa/contacts')
    })
    it('should navigate to the 404 page', async () => {
      await page.goto('http://localhost:3000/Big-lapa/mistakepage')
      await page.waitForSelector('[data-testid="not-found-page"]')
      const text = await page.$eval(
        '[data-testid="not-found-page"]',
        (e) => e.textContent,
      )
      expect(text).toContain('404 NotFound')
    })
  })
})
