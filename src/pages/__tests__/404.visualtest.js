import puppeteer from "puppeteer"

const { toMatchImageSnapShot } = require("jest-image-snapshot")

expect.extend({ toMatchImageSnapShot })

let browser

beforeAll(async () => {
  browser = await puppeteer.launch()
})

describe("404 page:", () => {
  test("matches its image snapshot", async () => {
    const page = await browser.newPage()
    await page.goto("http://localhost:8000/404")
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
})
