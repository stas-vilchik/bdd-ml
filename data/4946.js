{
  const mock = require("../");

  const global = vm.runInNewContext("this");
  moduleMocker = new mock.ModuleMocker(global);
}
