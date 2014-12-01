exports.config = {
  baseUrl: 'http://localhost:3000',
  framework: 'cucumber',
  rootElement: 'body', // location of ng-app directive
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    'browserName': 'chrome'
  },
  specs: ['../test/features/*.feature'],
  cucumberOpts: {
    format: 'pretty'
  }
};

