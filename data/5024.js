{
  const globalConfig = {
    maxWorkers: 2,
    watch: true
  };
  const config = {
    rootDir: "/path/"
  };
  const rawModuleMap = jest.fn();
  const context = {
    config,
    moduleMap: {
      getRawModuleMap: () => rawModuleMap
    }
  };
  return new TestRunner(globalConfig)
    .runTests(
      [
        {
          context,
          path: "./file.test.js"
        },
        {
          context,
          path: "./file2.test.js"
        }
      ],
      new TestWatcher({
        isWatchMode: globalConfig.watch
      }),
      () => {},
      () => {},
      () => {},
      {
        serial: false
      }
    )
    .then(() => {
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
    });
}
