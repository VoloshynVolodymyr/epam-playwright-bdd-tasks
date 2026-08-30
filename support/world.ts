import { World, IWorldOptions, setWorldConstructor } from '@cucumber/cucumber'
import { Browser, BrowserContext, Page, chromium } from '@playwright/test'
import { PageFactory } from '../pages/PageFactory'

export class CustomWorld extends World {
  browser!: Browser
  context!: BrowserContext
  page!: Page
  pages!: PageFactory

  constructor(options: IWorldOptions) {
    super(options)
  }

  async init(): Promise<void> {
    this.browser = await chromium.launch({ headless: true })
    this.context = await this.browser.newContext({
      baseURL: 'https://practicesoftwaretesting.com'
    })
    this.page = await this.context.newPage()

    // Debug: log the status and server header of the top-level document
    // response, to surface the Cloudflare 403 that appears in CI (headless,
    // datacenter IP) but not locally (real browser passes the anti-bot check).
    this.page.on('response', (response) => {
      if (response.request().resourceType() === 'document') {
        const server = response.headers()['server'] ?? 'unknown'
        console.log(
          `[DEBUG] Document ${response.status()} for ${response.url()} (server: ${server})`
        )
      }
    })

    this.pages = new PageFactory(this.page)
  }

  async destroy(): Promise<void> {
    await this.page?.close()
    await this.context?.close()
    await this.browser?.close()
  }
}

setWorldConstructor(CustomWorld)
