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

  it('contains This is home page', async () => {
    await page.goto('http://localhost:3000')
    await page.waitForSelector('[data-testid="home-page"]')
    const text = await page.$eval('[data-testid="home-page"]', (e) => e.textContent)
    expect(text).toContain('This is the Home Page')
  })

  afterAll(() => browser.close())
})
