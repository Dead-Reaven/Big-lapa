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

  it('contains the welcome text', async () => {
    await page.goto('http://localhost:3000')
    // await page.waitForSelector('.App-welcome-text')
    // const text = await page.$eval('.App-welcome-text', (e) => e.textContent)
    // expect(text).toContain('Edit src/App.js and save to reload.')
  })

  afterAll(() => browser.close())
})
