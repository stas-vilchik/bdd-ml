{
  FakeTimers = require("../fake_timers").default;

  const mock = require("jest-mock");

  const global = vm.runInNewContext("this");
  moduleMocker = new mock.ModuleMocker(global);
}
