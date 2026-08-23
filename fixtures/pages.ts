import { test as base, expect, Page } from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
import { ProductOverviewPage } from '../pages/ProductOverviewPage'

class PageFactory {
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

type Fixtures = {
  pages: PageFactory
}

export const test = base.extend<Fixtures>({
  pages: async ({ page }, use) => {
    await use(new PageFactory(page))
  }
})

export { expect }
