{
  it("behaves correctly when requiring a module that is used by jest internals", () => {
    const fs = require("fs");

    const jestUtil = require("../../../packages/jest-util");

    jestUtil.createDirectory("./dont-create-this-folder");
    expect(fs.__wasMkdirCalled()).toBe(true);
  });
}
