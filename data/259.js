{
  var customLaunchers = {};
  var browsers = [];

  if (process.env.SAUCE_USERNAME || process.env.SAUCE_ACCESS_KEY) {
    customLaunchers = {};
    var runAll = true;
    var options = [
      "SAUCE_CHROME",
      "SAUCE_FIREFOX",
      "SAUCE_SAFARI",
      "SAUCE_OPERA",
      "SAUCE_IE",
      "SAUCE_EDGE",
      "SAUCE_IOS",
      "SAUCE_ANDROID"
    ];
    options.forEach(function(opt) {
      if (process.env[opt]) {
        runAll = false;
      }
    });

    if (runAll || process.env.SAUCE_CHROME) {
      customLaunchers.SL_Chrome = createCustomLauncher("chrome");
    }

    if (runAll || process.env.SAUCE_FIREFOX) {
      customLaunchers.SL_Firefox = createCustomLauncher("firefox");
    }

    if (runAll || process.env.SAUCE_SAFARI) {
      customLaunchers.SL_Safari9 = createCustomLauncher("safari", 9);
    }

    if (runAll || process.env.SAUCE_OPERA) {
    }

    if (runAll || process.env.SAUCE_IE) {
      customLaunchers.SL_IE9 = createCustomLauncher(
        "internet explorer",
        9,
        "Windows 2008"
      );
      customLaunchers.SL_IE10 = createCustomLauncher(
        "internet explorer",
        10,
        "Windows 2012"
      );
      customLaunchers.SL_IE11 = createCustomLauncher(
        "internet explorer",
        11,
        "Windows 8.1"
      );
    }

    if (runAll || process.env.SAUCE_EDGE) {
      customLaunchers.SL_Edge = createCustomLauncher(
        "microsoftedge",
        null,
        "Windows 10"
      );
    }

    if (runAll || process.env.SAUCE_IOS) {
    }

    if (runAll || process.env.SAUCE_ANDROID) {
    }

    browsers = Object.keys(customLaunchers);
  } else if (
    process.env.TRAVIS_PULL_REQUEST &&
    process.env.TRAVIS_PULL_REQUEST !== "false"
  ) {
    console.log(
      "Cannot run on Sauce Labs as encrypted environment variables are not available to PRs. " +
        "Running on Travis."
    );
    browsers = ["Firefox"];
  } else {
    console.log(
      "Running locally since SAUCE_USERNAME and SAUCE_ACCESS_KEY environment variables are not set."
    );
    browsers = ["Firefox", "Chrome", "Safari", "Opera"];
  }

  config.set({
    basePath: "",
    frameworks: ["jasmine-ajax", "jasmine", "sinon"],
    files: ["test/specs/__helpers.js", "test/specs/**/*.spec.js"],
    exclude: [],
    preprocessors: {
      "test/specs/__helpers.js": ["webpack", "sourcemap"],
      "test/specs/**/*.spec.js": ["webpack", "sourcemap"]
    },
    reporters: ["dots", "coverage", "saucelabs"],
    port: 9876,
    captureTimeout: 4 * 60 * 1000,
    browserDisconnectTimeout: 10000,
    browserDisconnectTolerance: 1,
    browserNoActivityTimeout: 4 * 60 * 1000,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: browsers,
    singleRun: false,
    webpack: {
      cache: true,
      devtool: "inline-source-map",
      module: {
        postLoaders: [
          {
            test: /\.js$/,
            exclude: /(node_modules|test)/,
            loader: "istanbul-instrumenter"
          }
        ]
      },
      externals: [
        {
          "./adapters/http": "var undefined"
        }
      ],
      plugins: [
        new webpack.DefinePlugin({
          "process.env.NODE_ENV": JSON.stringify("test")
        })
      ]
    },
    webpackServer: {
      stats: {
        colors: true
      }
    },
    coverageReporter: {
      type: "lcov",
      dir: "coverage/",
      subdir: "."
    },
    sauceLabs: {
      recordScreenshots: false,
      connectOptions: {
        port: 5757,
        logfile: "sauce_connect.log"
      },
      public: "public"
    },
    customLaunchers: customLaunchers
  });
}
