{
  const scriptTransformer = new ScriptTransformer(config);
  const response = scriptTransformer.transform("/fruits/banana.js", {
    collectCoverage: true
  }).script;
  expect(response instanceof vm.Script).toBe(true);
  expect(vm.Script.mock.calls[0][0]).toMatchSnapshot();
  expect(fs.readFileSync.mock.calls.length).toBe(1);
  expect(fs.readFileSync).toBeCalledWith("/fruits/banana.js", "utf8");
  const response2 = scriptTransformer.transform("/fruits/banana.js", {
    collectCoverage: true
  }).script;
  expect(response2).toBe(response);
  scriptTransformer.transform("/fruits/kiwi.js", {
    collectCoverage: true
  });
  const snapshot = vm.Script.mock.calls[1][0];
  expect(snapshot).toMatchSnapshot();
  scriptTransformer.transform("/fruits/kiwi.js", {
    collectCoverage: true
  });
  expect(vm.Script.mock.calls[0][0]).not.toEqual(snapshot);
  expect(vm.Script.mock.calls[0][0]).not.toMatch(/instrumented kiwi/);
  scriptTransformer.transform("/fruits/kiwi.js", {
    collectCoverage: false
  });
  expect(vm.Script.mock.calls[1][0]).toEqual(snapshot);
}
