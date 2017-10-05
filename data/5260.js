{
  const transformConfig = Object.assign(config, {
    transform: [["^.+\\.js$", "test_preprocessor"]]
  });
  let scriptTransformer = new ScriptTransformer(transformConfig);
  scriptTransformer.transform("/fruits/banana.js", {});
  const cachePath = getCachePath(mockFs, config);
  expect(writeFileAtomic.sync).toBeCalled();
  expect(writeFileAtomic.sync.mock.calls[0][0]).toBe(cachePath);
  const mockFsCopy = mockFs;
  jest.resetModuleRegistry();
  reset();
  mockFs = mockFsCopy;
  scriptTransformer = new ScriptTransformer(transformConfig);
  scriptTransformer.transform("/fruits/banana.js", {});
  expect(fs.readFileSync.mock.calls.length).toBe(2);
  expect(fs.readFileSync).toBeCalledWith("/fruits/banana.js", "utf8");
  expect(fs.readFileSync).toBeCalledWith(cachePath, "utf8");
  expect(writeFileAtomic.sync).not.toBeCalled();
  jest.resetModuleRegistry();
  reset();
  mockFs = mockFsCopy;
  transformConfig.cache = false;
  scriptTransformer = new ScriptTransformer(transformConfig);
  scriptTransformer.transform("/fruits/banana.js", {});
  expect(fs.readFileSync.mock.calls.length).toBe(1);
  expect(fs.readFileSync).toBeCalledWith("/fruits/banana.js", "utf8");
  expect(fs.readFileSync).not.toBeCalledWith(cachePath, "utf8");
  expect(writeFileAtomic.sync).toBeCalled();
}
