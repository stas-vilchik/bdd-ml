{
  const globalConfig = {
    maxWorkers: 1,
    watch: false
  };
  const config = {
    rootDir: "/path/"
  };
  const context = {
    config
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
    });
}
