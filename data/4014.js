{
  const timerGame = require("../timerGame");

  const callback = jest.fn();
  timerGame(callback);
  expect(callback).not.toBeCalled();
  jest.runAllTimers();
  expect(callback).toBeCalled();
  expect(callback.mock.calls.length).toBe(1);
}
