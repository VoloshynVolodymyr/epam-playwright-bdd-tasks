import { Page } from '@playwright/test'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { RegisterPage } from './RegisterPage'
import { ProductOverviewPage } from './ProductOverviewPage'

export class PageFactory {
  constructor(private page: Page) {}

  get homePage(): HomePage {
    return new HomePage(this.page)
  }

  get loginPage(): LoginPage {
    return new LoginPage(this.page)
  }

  get registerPage(): RegisterPage {
    return new RegisterPage(this.page)
  }

  get productOverviewPage(): ProductOverviewPage {
    return new ProductOverviewPage(this.page)
  }
}
