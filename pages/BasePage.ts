import { Page } from '@playwright/test'
import { HeaderComponent } from '../components/HeaderComponent'

export class BasePage {
  readonly page: Page
  readonly path: string
  readonly header: HeaderComponent

  constructor(page: Page, path: string = '/') {
    this.page = page
    this.path = path
    this.header = new HeaderComponent(page)
  }

  async open(): Promise<void> {
    await this.page.goto(this.path)
  }
}
