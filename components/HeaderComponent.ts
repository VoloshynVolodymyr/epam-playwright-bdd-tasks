import { Page, Locator } from '@playwright/test'

export class HeaderComponent {
  readonly page: Page
  readonly categoriesDropdown: Locator
  readonly powerToolsLink: Locator
  readonly accountMenuToggle: Locator
  readonly myAccountLink: Locator
  readonly signOutLink: Locator

  constructor(page: Page) {
    this.page = page
    this.categoriesDropdown = page.locator('[data-test="nav-categories"]')
    this.powerToolsLink = page.locator('[data-test="nav-power-tools"]')
    this.accountMenuToggle = page.locator('[data-test="nav-menu"]')
    this.myAccountLink = page.locator('[data-test="nav-my-account"]')
    this.signOutLink = page.locator('[data-test="nav-sign-out"]')
  }

  async openCategory(categoryLink: Locator): Promise<void> {
    await this.categoriesDropdown.hover()
    await this.categoriesDropdown.click()
    await categoryLink.click()
  }

  async openAccountMenu(): Promise<void> {
    await this.accountMenuToggle.click()
  }
}
