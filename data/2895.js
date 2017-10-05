{
  if (process.env.CIRCLE_PR_NUMBER) {
    version += "+pr." + process.env.CIRCLE_PR_NUMBER;
  }

  const typeofPlugin = require("babel-plugin-transform-es2015-typeof-symbol")
    .default;

  const preset2015 = require("babel-preset-es2015").default();

  const es2015WithoutTypeof = {
    plugins: preset2015.plugins.filter(plugin => plugin !== typeofPlugin)
  };
  const config = {
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          options: {
            babelrc: false,
            presets: [es2015WithoutTypeof, require("babel-preset-stage-0")]
          }
        }
      ]
    },
    node: {
      fs: "empty",
      module: "empty",
      net: "empty"
    },
    output: {
      filename: filename,
      library: libraryName,
      libraryTarget: "umd"
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": '"production"',
        BABEL_VERSION: JSON.stringify(
          require("babel-core/package.json").version
        ),
        VERSION: JSON.stringify(version)
      }),
      new webpack.NormalModuleReplacementPlugin(
        /debug\/node/,
        "debug/src/browser"
      ),
      new webpack.optimize.ModuleConcatenationPlugin()
    ],
    resolve: {
      plugins: [new RootMostResolvePlugin(__dirname + "/../../../", true)]
    }
  };

  if (libraryName !== "Babel") {
    config.externals = {
      "babel-standalone": "Babel"
    };
  }

  return webpackStream(config, webpack);
}
