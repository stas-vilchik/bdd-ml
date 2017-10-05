{
  expect(workerFarmMock.mock.calls).toEqual([
    [
      {
        config,
        globalConfig,
        path: "./file.test.js",
        rawModuleMap: null
      },
      expect.any(Function)
    ],
    [
      {
        config,
        globalConfig,
        path: "./file2.test.js",
        rawModuleMap: null
      },
      expect.any(Function)
    ]
  ]);
}
