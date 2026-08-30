import { test as base, expect } from '@playwright/test'
import { PageFactory } from '../pages/PageFactory'

type Fixtures = {
  pages: PageFactory
}

export const test = base.extend<Fixtures>({
  pages: async ({ page }, use) => {
    await use(new PageFactory(page))
  }
})

export { expect }
