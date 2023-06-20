// //Warning before run .e2e test you must run before: npm run dev
import puppeteer from 'puppeteer'
import type { Page, Browser } from 'puppeteer'

describe('Menu.test.ts', () => {
  let browser: Browser
  let page: Page

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: 'new' })
    page = await browser.newPage()
    await page.goto('http://localhost:3000')
  })

  afterAll(() => browser.close())

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

  it('should navigate to the support page', async () => {
    const link = await page.waitForSelector('[data-testid="support-link"]')
    link?.click()
    await page.waitForNavigation()
    const currentURL = page.url()
    expect(currentURL).toBe('http://localhost:3000/Big-lapa/support')
  })
})
