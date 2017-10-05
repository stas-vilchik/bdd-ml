{
  const destPath = getBuildPath(file, BUILD_DIR);
  mkdirp.sync(path.dirname(destPath));

  if (micromatch.isMatch(file, IGNORE_PATTERN)) {
    silent ||
      process.stdout.write(
        chalk.dim("  \u2022 ") +
          path.relative(PACKAGES_DIR, file) +
          " (ignore)\n"
      );
  } else if (!micromatch.isMatch(file, JS_FILES_PATTERN)) {
    fs.createReadStream(file).pipe(fs.createWriteStream(destPath));
    silent ||
      process.stdout.write(
        chalk.red("  \u2022 ") +
          path.relative(PACKAGES_DIR, file) +
          chalk.red(" \u21D2 ") +
          path.relative(PACKAGES_DIR, destPath) +
          " (copy)" +
          "\n"
      );
  } else {
    const options = Object.assign({}, transformOptions);
    options.plugins = options.plugins.slice();

    if (!INLINE_REQUIRE_BLACKLIST.test(file)) {
      options.plugins = options.plugins.filter(
        plugin =>
          !(
            Array.isArray(plugin) &&
            plugin[0] === "transform-es2015-modules-commonjs"
          )
      );
      options.plugins.push([
        "transform-inline-imports-commonjs",
        {
          allowTopLevelThis: true
        }
      ]);
    }

    const transformed = babel.transformFileSync(file, options).code;
    fs.writeFileSync(destPath, transformed);
    silent ||
      process.stdout.write(
        chalk.green("  \u2022 ") +
          path.relative(PACKAGES_DIR, file) +
          chalk.green(" \u21D2 ") +
          path.relative(PACKAGES_DIR, destPath) +
          "\n"
      );
  }
}
