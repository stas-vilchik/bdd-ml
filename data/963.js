{
  if (binName[0] === ".") return;
  const suiteLoc = path.join(fixtureLoc, binName);
  describe("bin/" + binName, function() {
    fs.readdirSync(suiteLoc).forEach(function(testName) {
      if (testName[0] === ".") return;
      const testLoc = path.join(suiteLoc, testName);
      const opts = {
        args: []
      };
      const optionsLoc = path.join(testLoc, "options.json");
      if (fs.existsSync(optionsLoc)) merge(opts, require(optionsLoc));
      ["stdout", "stdin", "stderr"].forEach(function(key) {
        const loc = path.join(testLoc, key + ".txt");

        if (fs.existsSync(loc)) {
          opts[key] = helper.readFile(loc);
        } else {
          opts[key] = opts[key] || "";
        }
      });
      opts.outFiles = readDir(path.join(testLoc, "out-files"), fileFilter);
      opts.inFiles = readDir(path.join(testLoc, "in-files"), fileFilter);
      const babelrcLoc = path.join(testLoc, ".babelrc");

      if (fs.existsSync(babelrcLoc)) {
        opts.inFiles[".babelrc"] = helper.readFile(babelrcLoc);
      }

      it(testName, buildTest(binName, testName, opts));
    });
  });
}
