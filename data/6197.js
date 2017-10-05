{
  var source;
  var jestRegex = /jest\.d\.ts/;
  var reactRegex = /(?:React|ReactDOM|PropTypes)(?:\.d)?\.ts$/;
  filename = path.normalize(filename);

  if (filename === "lib.d.ts") {
    source = fs
      .readFileSync(require.resolve("typescript/lib/lib.d.ts"))
      .toString();
  } else if (filename.match(jestRegex)) {
    source = fs.readFileSync(path.join(__dirname, "jest.d.ts")).toString();
  } else if (filename === contentFilename) {
    source = content;
  } else if (reactRegex.test(filename)) {
    try {
      source = fs.readFileSync(filename).toString();
    } catch (e) {
      if (e.code === "ENOENT") {
        return undefined;
      }

      throw e;
    }
  } else {
    throw new Error("Unexpected filename " + filename);
  }

  return ts.createSourceFile(filename, source, "ES5", "0");
}
