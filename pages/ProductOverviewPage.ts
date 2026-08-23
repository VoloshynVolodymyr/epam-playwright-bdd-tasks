import { Page, Locator } from '@playwright/test'
import { BasePage } from './BasePage'

export class ProductOverviewPage extends BasePage {
  readonly pageTitle: Locator
  readonly searchInput: Locator
  readonly searchSubmitButton: Locator
  readonly productCards: Locator

  constructor(page: Page) {
    super(page)
    this.pageTitle = page.locator('[data-test="page-title"]')
    this.searchInput = page.locator('[data-test="search-query"]')
    this.searchSubmitButton = page.locator('[data-test="search-submit"]')
    this.productCards = page.locator('a.card')
  }

  async searchForProduct(query: string): Promise<void> {
    await this.searchInput.pressSequentially(query)
    await this.searchSubmitButton.click()
  }

  getProductCardByName(productName: string): Locator {
    return this.productCards.filter({
      has: this.page.locator('[data-test="product-name"]', {
        hasText: new RegExp(`^\\s*${productName}\\s*$`)
      })
    })
  }
}
