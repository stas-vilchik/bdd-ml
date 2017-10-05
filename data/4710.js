{
  let argv = {};
  setState(argv, "watch", {});
  expect(argv.onlyChanged).toBeTruthy();
  argv = {
    testPathPattern: "jest-cli"
  };
  setState(argv, "watch", {});
  expect(argv.onlyChanged).toBeFalsy();
  argv = {
    testNamePattern: "name-test"
  };
  setState(argv, "watch", {});
  expect(argv.onlyChanged).toBeFalsy();
  argv = {};
  setState(argv, "watchAll", {});
  expect(argv.onlyChanged).toBeFalsy();
}
