{
  config.set({
    browsers: ["ChromeHeadless"],
    files: ["integration_tests/browser-support/browser-test.js"],
    frameworks: ["mocha", "browserify"],
    preprocessors: {
      "integration_tests/browser-support/browser-test.js": ["browserify"]
    }
  });
}
