{
  if (isProd) {
    var minified =
      (banner ? banner + "\n" : "") +
      uglify.minify(code, {
        output: {
          ascii_only: true
        },
        compress: {
          pure_funcs: ["makeMap"]
        }
      }).code;
    return write(file, minified, true);
  } else {
    return write(file, code);
  }
}
