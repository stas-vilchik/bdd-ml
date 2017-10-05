{
  let argv = {};
  setState(argv, "watch", {});
  expect(argv.watch).toBeTruthy();
  expect(argv.watchAll).toBeFalsy();
  argv = {};
  setState(argv, "watchAll", {});
  expect(argv.watch).toBeFalsy();
  expect(argv.watchAll).toBeTruthy();
}
