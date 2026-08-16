import { test as base, expect } from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { HeaderComponent } from '../pages/HeaderComponent'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
import { ProductOverviewPage } from '../pages/ProductOverviewPage'

type Pages = {
  homePage: HomePage
  headerComponent: HeaderComponent
  loginPage: LoginPage
  registerPage: RegisterPage
  productOverviewPage: ProductOverviewPage
}

export const test = base.extend<Pages>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page))
  },
  headerComponent: async ({ page }, use) => {
    await use(new HeaderComponent(page))
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page))
  },
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page))
  },
  productOverviewPage: async ({ page }, use) => {
    await use(new ProductOverviewPage(page))
  }
})

export { expect }
