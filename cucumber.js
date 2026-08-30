module.exports = {
  default: {
    requireModule: ['tsx/cjs'],
    require: ['support/**/*.ts', 'step-definitions/**/*.ts'],
    paths: ['features/**/*.feature'],
    format: ['progress-bar', 'html:cucumber-report.html'],
    formatOptions: { snippetInterface: 'async-await' }
  }
}
