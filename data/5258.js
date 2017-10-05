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
    mapCoverage: false
  });
  expect(result.sourceMapPath).toBeFalsy();
  expect(writeFileAtomic.sync).toHaveBeenCalledTimes(1);
}
