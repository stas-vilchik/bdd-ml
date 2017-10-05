{
  const fs = require("fs");

  const jestUtil = require("../../../packages/jest-util");

  jestUtil.createDirectory("./dont-create-this-folder");
  expect(fs.__wasMkdirCalled()).toBe(true);
}
