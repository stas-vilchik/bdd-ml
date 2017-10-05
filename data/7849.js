{
  const output = config.output;
  const { file, banner } = output;
  const isProd = /min\.js$/.test(file);
  return rollup
    .rollup(config)
    .then(bundle => bundle.generate(output))
    .then(({ code }) => {
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
    });
}
