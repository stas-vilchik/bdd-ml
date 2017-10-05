{
  let argv = {};
  setState(argv, "watch", {
    noSCM: true
  });
  expect(argv.noSCM).toBeTruthy();
  argv = {};
  setState(argv, "watch", {
    noSCM: false
  });
  expect(argv.noSCM).toBeFalsy();
}
