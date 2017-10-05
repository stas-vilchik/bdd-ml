workerFarmMock = jest.fn((data, callback) => require(worker)(data, callback));
