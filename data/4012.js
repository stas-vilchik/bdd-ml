{
  it("waits 1 second before ending the game", () => {
    const timerGame = require("../timerGame");

    timerGame();
    expect(setTimeout.mock.calls.length).toBe(1);
    expect(setTimeout.mock.calls[0][1]).toBe(1000);
  });
  it("calls the callback after 1 second via runAllTimers", () => {
    const timerGame = require("../timerGame");

    const callback = jest.fn();
    timerGame(callback);
    expect(callback).not.toBeCalled();
    jest.runAllTimers();
    expect(callback).toBeCalled();
    expect(callback.mock.calls.length).toBe(1);
  });
  it("calls the callback after 1 second via runTimersToTime", () => {
    const timerGame = require("../timerGame");

    const callback = jest.fn();
    timerGame(callback);
    expect(callback).not.toBeCalled();
    jest.runTimersToTime(1000);
    expect(callback).toBeCalled();
    expect(callback.mock.calls.length).toBe(1);
  });
}
