{
  const plugins = [
    babel(updateBabelConfig(babelOpts, bundleType)),
    alias(
      Modules.getAliases(paths, bundleType, isRenderer, argv["extract-errors"])
    )
  ];
  const replaceModules = Modules.getDefaultReplaceModules(
    bundleType,
    modulesToStub
  );

  if (Object.keys(replaceModules).length > 0) {
    plugins.unshift(replace(replaceModules));
  }

  const headerSanityCheck = getHeaderSanityCheck(bundleType, hasteName);

  switch (bundleType) {
    case UMD_DEV:
    case NODE_DEV:
    case FB_DEV:
      plugins.push(
        replace(stripEnvVariables(false)),
        commonjs(getCommonJsConfig(bundleType))
      );
      break;

    case UMD_PROD:
    case NODE_PROD:
      plugins.push(
        replace(stripEnvVariables(true)),
        commonjs(getCommonJsConfig(bundleType)),
        closure({
          compilationLevel: "SIMPLE",
          languageIn: "ECMASCRIPT5_STRICT",
          languageOut: "ECMASCRIPT5_STRICT",
          env: "CUSTOM",
          warningLevel: "QUIET",
          assumeFunctionWrapper: bundleType !== UMD_PROD,
          applyInputSourceMaps: false,
          useTypesForOptimization: false,
          processCommonJsModules: false
        })
      );
      break;

    case FB_PROD:
      plugins.push(
        replace(stripEnvVariables(true)),
        commonjs(getCommonJsConfig(bundleType)),
        uglify(
          uglifyConfig({
            mangle: bundleType !== FB_PROD,
            manglePropertiesOnProd,
            preserveVersionHeader: bundleType === UMD_PROD,
            removeComments: bundleType !== FB_PROD,
            headerSanityCheck
          })
        )
      );
      break;

    case RN_DEV:
    case RN_PROD:
      plugins.push(
        replace(stripEnvVariables(bundleType === RN_PROD)),
        commonjs(getCommonJsConfig(bundleType)),
        uglify(
          uglifyConfig({
            mangle: false,
            manglePropertiesOnProd,
            preserveVersionHeader: true,
            removeComments: true,
            headerSanityCheck
          })
        )
      );
      break;
  }

  plugins.push(
    sizes({
      getSize: (size, gzip) => {
        const key = `${filename} (${bundleType})`;
        Stats.currentBuildResults.bundleSizes[key] = {
          size,
          gzip
        };
      }
    })
  );
  return plugins;
}
