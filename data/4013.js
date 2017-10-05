{
  const timerGame = require("../timerGame");

  timerGame();
  expect(setTimeout.mock.calls.length).toBe(1);
  expect(setTimeout.mock.calls[0][1]).toBe(1000);
}
