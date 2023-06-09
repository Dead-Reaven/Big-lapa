//Warning before run .e2e test you must run before: npm run dev
import puppeteer from 'puppeteer'
import type { Page, Browser } from 'puppeteer'

describe('App.js', () => {
  let browser: Browser
  let page: Page

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: 'new' })
    page = await browser.newPage()
  })

  it('contains This is home page', async () => {
    await page.goto('http://localhost:3000')
    await page.waitForSelector('div > .app')
    const text = await page.$eval('div > .app', (e) => e.textContent)
    expect(text).toContain('This is home page')
  })

  afterAll(() => browser.close())
})
