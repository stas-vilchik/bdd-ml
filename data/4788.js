{
  const mock = jest.fn(
    (options, worker) =>
      (workerFarmMock = jest.fn((data, callback) =>
        require(worker)(data, callback)
      ))
  );
  mock.end = jest.fn();
  return mock;
}
