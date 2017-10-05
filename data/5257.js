{
  config = Object.assign(config, {
    transform: [["^.+\\.js$", "preprocessor-with-sourcemaps"]]
  });
  const scriptTransformer = new ScriptTransformer(config);
  const sourceMap = JSON.stringify({
    mappings: "AAAA,IAAM,CAAC,GAAW,CAAC,CAAC",
    version: 3
  });
  const content =
    "var x = 1;\n" +
    "//# sourceMappingURL=data:application/json;base64," +
    new Buffer(sourceMap).toString("base64");

  require("preprocessor-with-sourcemaps").process.mockReturnValue(content);

  const result = scriptTransformer.transform("/fruits/banana.js", {
    collectCoverage: true,
    mapCoverage: true
  });
  expect(result.sourceMapPath).toEqual(expect.any(String));
  expect(writeFileAtomic.sync).toBeCalledWith(result.sourceMapPath, sourceMap, {
    encoding: "utf8"
  });
}
