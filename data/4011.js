{
  const infiniteTimerGame = require("../infiniteTimerGame");

  const callback = jest.fn();
  infiniteTimerGame(callback);
  expect(setTimeout.mock.calls.length).toBe(1);
  expect(setTimeout.mock.calls[0][1]).toBe(1000);
  jest.runOnlyPendingTimers();
  expect(callback).toBeCalled();
  expect(setTimeout.mock.calls.length).toBe(2);
  expect(setTimeout.mock.calls[1][1]).toBe(10000);
}
