{
  expect(workerFarmMock.mock.calls).toEqual([
    [
      {
        config,
        globalConfig,
        path: "./file.test.js",
        rawModuleMap
      },
      expect.any(Function)
    ],
    [
      {
        config,
        globalConfig,
        path: "./file2.test.js",
        rawModuleMap
      },
      expect.any(Function)
    ]
  ]);
}
