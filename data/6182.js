{
  if (filePath.match(/\.coffee$/)) {
    return coffee.compile(src, {
      bare: true
    });
  }

  if (filePath.match(/\.ts$/) && !filePath.match(/\.d\.ts$/)) {
    return tsPreprocessor.compile(src, filePath);
  }

  if (
    !filePath.match(/\/node_modules\//) &&
    !filePath.match(/\/third_party\//)
  ) {
    var isTestFile = !!filePath.match(/\/__tests__\//);
    return babel.transform(
      src,
      Object.assign(
        {
          filename: path.relative(process.cwd(), filePath)
        },
        babelOptions,
        isTestFile
          ? {
              plugins: [pathToBabelPluginAsyncToGenerator].concat(
                babelOptions.plugins
              )
            }
          : {}
      )
    ).code;
  }

  return src;
}
