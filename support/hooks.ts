import { Before, After, setDefaultTimeout } from '@cucumber/cucumber'
import { CustomWorld } from './world'

// Cucumber's default step timeout is 5s, too short for real browser.
setDefaultTimeout(60 * 1000)

Before(async function (this: CustomWorld) {
  await this.init()
})

After(async function (this: CustomWorld) {
  await this.destroy()
})
