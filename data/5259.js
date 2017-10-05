{
  config = Object.assign(config, {
    transform: [["^.+\\.js$", "test_preprocessor"]]
  });
  const scriptTransformer = new ScriptTransformer(config);
  scriptTransformer.transform("/fruits/banana.js", {
    collectCoverage: true,
    mapCoverage: true
  });

  const { getCacheKey } = require("test_preprocessor");

  expect(getCacheKey.mock.calls[0][3]).toMatchSnapshot();
}
