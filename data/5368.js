{
  return rollup({
    entry: entryPath,
    onwarn: () => {},
    plugins: [
      {
        resolveId(id) {
          return id === "chalk"
            ? path.resolve(__dirname, "../packages/expect/build/fake_chalk.js")
            : undefined;
        }
      },
      rollupFlow(),
      rollupJson(),
      rollupCommonjs(),
      rollupBabel(babelEs5Options),
      rollupGlobals(),
      rollupBuiltins(),
      rollupResolve()
    ],
    strict: false
  }).then(bundle => {
    return bundle.write({
      dest: destination,
      format: "umd",
      moduleName: pkgName
    });
  });
}
