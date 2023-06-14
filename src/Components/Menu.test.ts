// //Warning before run .e2e test you must run before: npm run dev
import puppeteer from 'puppeteer'
import type { Page, Browser } from 'puppeteer'

describe('App.js', () => {
  let browser: Browser
  let page: Page

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: 'new' })
    page = await browser.newPage()
    await page.goto('http://localhost:3000')
  })

  it('should navigate to the home page', async () => {
    const dogsLink = await page.waitForSelector(
      'div > .app > .container > nav > a[href="/Big-lapa/"]',
    )
    if (dogsLink) {
      dogsLink.click()
    }
    await page.waitForNavigation()
    const currentURL = await page.url()
    expect(currentURL).toBe('http://localhost:3000/Big-lapa/')
  })

  it('should navigate to the dogs page', async () => {
    const dogsLink = await page.waitForSelector(
      'div > .app > .container > nav > a[href="/Big-lapa/dogs"]',
    )
    if (dogsLink) {
      dogsLink.click()
    }
    await page.waitForNavigation()
    const currentURL = await page.url()
    expect(currentURL).toBe('http://localhost:3000/Big-lapa/dogs')
  })

  it('should navigate to the about page', async () => {
    const aboutLink = await page.waitForSelector(
      'div > .app > .container > nav > a[href="/Big-lapa/about"]',
    )
    if (aboutLink) {
      aboutLink.click()
    }
    await page.waitForNavigation()
    const currentURL = await page.url()
    expect(currentURL).toBe('http://localhost:3000/Big-lapa/about')
  })

  it('should navigate to the support page', async () => {
    const supportLink = await page.waitForSelector(
      'div > .app > .container > nav > a[href="/Big-lapa/support"]',
    )
    if (supportLink) {
      supportLink.click()
    }
    await page.waitForNavigation()
    const currentURL = await page.url()
    expect(currentURL).toBe('http://localhost:3000/Big-lapa/support')
  })

  afterAll(() => browser.close())
})
