import puppeteer from 'puppeteer'
import type { Page, Browser } from 'puppeteer'

let browser: Browser
let page: Page

it('404', async () => {
  browser = await puppeteer.launch({ headless: 'new' })
  page = await browser.newPage()
  await page.goto('http://localhost:3000/Big-lapa/mistakepage')
  await page.waitForSelector('[data-testid="not-found-page"]')
  const text = await page.$eval('[data-testid="not-found-page"]', (e) => e.textContent)
  expect(text).toContain('404 NotFound')
  browser.close()
})
