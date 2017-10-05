{
  config = Object.assign(config, {
    transform: [
      ["^.+\\.js$", "test_preprocessor"],
      ["^.+\\.css$", "css-preprocessor"]
    ]
  });
  const scriptTransformer = new ScriptTransformer(config);
  scriptTransformer.transform("/fruits/banana.js", {});
  scriptTransformer.transform("/styles/App.css", {});
  expect(require("test_preprocessor").getCacheKey).toBeCalled();
  expect(require("css-preprocessor").getCacheKey).toBeCalled();
  expect(vm.Script.mock.calls[0][0]).toMatchSnapshot();
  expect(vm.Script.mock.calls[1][0]).toMatchSnapshot();
  scriptTransformer.transform("/node_modules/react.js", {});
  expect(vm.Script.mock.calls[2][0]).toMatchSnapshot();
}
