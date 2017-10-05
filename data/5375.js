{
  const srcDir = path.resolve(p, SRC_DIR);
  const pkgJsonPath = path.resolve(p, "package.json");

  if (!fs.existsSync(pkgJsonPath)) {
    return;
  }

  const browser = require(pkgJsonPath).browser;

  if (browser) {
    if (browser.indexOf(BUILD_ES5_DIR) !== 0) {
      throw new Error(
        `browser field for ${pkgJsonPath} should start with "${BUILD_ES5_DIR}"`
      );
    }

    browserBuild(
      p.split("/").pop(),
      path.resolve(srcDir, "index.js"),
      path.resolve(p, browser)
    )
      .then(() => {
        process.stdout.write(adjustToTerminalWidth(`${path.basename(p)}\n`));
        process.stdout.write(`${OK}\n`);
      })
      .catch(e => {
        console.error(e);
        process.exit(1);
      });
  }
}
