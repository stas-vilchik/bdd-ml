{
  expect(workerFarm.mock.calls.length).toBe(1);
  expect(workerFarmMock.mock.calls.length).toBe(5);
  expect(workerFarmMock.mock.calls).toEqual([
    [
      {
        filePath: "/fruits/__mocks__/Pear.js"
      },
      expect.any(Function)
    ],
    [
      {
        filePath: "/fruits/banana.js"
      },
      expect.any(Function)
    ],
    [
      {
        filePath: "/fruits/pear.js"
      },
      expect.any(Function)
    ],
    [
      {
        filePath: "/fruits/strawberry.js"
      },
      expect.any(Function)
    ],
    [
      {
        filePath: "/vegetables/melon.js"
      },
      expect.any(Function)
    ]
  ]);
  expect(workerFarm.end).toBeCalledWith(workerFarmMock);
}
