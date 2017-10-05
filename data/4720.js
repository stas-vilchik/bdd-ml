{
  jest.resetModules();
  jest.useFakeTimers();
  jest.mock("is-ci", () => false);
  oldIsTTY = process.stdin.isTTY;
  oldStdout = process.stdout.write;
  oldStderr = process.stderr.write;
  process.stdin.isTTY = true;
  process.stderr.write = jest.fn();
  stdout = process.stdout.write = jest.fn();
  DefaultReporter = require("../default_reporter").default;
}
