{
  var batch = batches[process.argv[4] || 0];
  config.set(
    Object.assign(base, {
      singleRun: true,
      browsers: Object.keys(batch),
      customLaunchers: batch,
      reporters: process.env.CI
        ? ["dots", "saucelabs"]
        : ["progress", "saucelabs"],
      sauceLabs: {
        testName: "Vue.js unit tests",
        recordScreenshots: false,
        connectOptions: {
          "no-ssl-bump-domains": "all"
        },
        build:
          process.env.CIRCLE_BUILD_NUM ||
          process.env.SAUCE_BUILD_ID ||
          Date.now()
      },
      captureTimeout: 300000,
      browserNoActivityTimeout: 300000,
      plugins: base.plugins.concat(["karma-sauce-launcher"])
    })
  );
}
