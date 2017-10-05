{
  const timerGame = require("../timerGame");

  const callback = jest.fn();
  timerGame(callback);
  expect(callback).not.toBeCalled();
  jest.runTimersToTime(1000);
  expect(callback).toBeCalled();
  expect(callback.mock.calls.length).toBe(1);
}
