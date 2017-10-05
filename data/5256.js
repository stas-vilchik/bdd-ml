{
  config = Object.assign(config, {
    transform: [["^.+\\.js$", "preprocessor-with-sourcemaps"]]
  });
  const scriptTransformer = new ScriptTransformer(config);
  const map = {
    mappings: ";AAAA",
    version: 3
  };

  require("preprocessor-with-sourcemaps").process.mockReturnValue({
    code: "content",
    map
  });

  const result = scriptTransformer.transform("/fruits/banana.js", {
    collectCoverage: true,
    mapCoverage: true
  });
  expect(result.sourceMapPath).toEqual(expect.any(String));
  const mapStr = JSON.stringify(map);
  expect(writeFileAtomic.sync).toBeCalledWith(result.sourceMapPath, mapStr, {
    encoding: "utf8"
  });
}
