exports.config = {
  /**
   * The address of a running Selenium Server. If specified, Protractor will
   * connect to an already running instance of Selenium. This usually looks like
   * seleniumAddress: 'http://localhost:4444/wd/hub'
   */
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['homepage.spec.js']
}