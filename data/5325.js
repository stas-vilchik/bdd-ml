{
  const consoleWarn = console.warn;
  console.warn = jest.fn();
  const timers = new FakeTimers(global, moduleMocker, {
    rootDir: __dirname
  });
  timers.runAllTimers();
  expect(
    console.warn.mock.calls[0][0].split("\nStack Trace")[0]
  ).toMatchSnapshot();
  console.warn = consoleWarn;
}
