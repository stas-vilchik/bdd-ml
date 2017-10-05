{
  config = Object.assign(config, {
    transform: [["^.+\\.js$", "test_preprocessor"]]
  });
  const scriptTransformer = new ScriptTransformer(config);
  scriptTransformer.transform("/fruits/banana.js", {});
  expect(require("test_preprocessor").getCacheKey).toBeCalled();
  expect(vm.Script.mock.calls[0][0]).toMatchSnapshot();
  scriptTransformer.transform("/node_modules/react.js", {});
  expect(vm.Script.mock.calls[1][0]).toMatchSnapshot();
}
