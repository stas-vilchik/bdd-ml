{
  process.platform = "linux";
  childProcess = require("child_process");
  nodeCrawl = require("../node");
  mockResponse = [
    "/fruits/pear.js",
    "/fruits/strawberry.js",
    "/fruits/tomato.js",
    "/vegetables/melon.json"
  ].join("\n");
  const promise = nodeCrawl({
    data: {
      files: Object.create(null)
    },
    extensions: ["js", "json"],
    ignore: pearMatcher,
    roots: ["/fruits", "/vegtables"]
  }).then(data => {
    expect(childProcess.spawn).lastCalledWith("find", [
      "/fruits",
      "/vegtables",
      "-type",
      "f",
      "(",
      "-iname",
      "*.js",
      "-o",
      "-iname",
      "*.json",
      ")"
    ]);
    expect(data.files).not.toBe(null);
    expect(data.files).toEqual({
      "/fruits/strawberry.js": ["", 32, 0, []],
      "/fruits/tomato.js": ["", 33, 0, []],
      "/vegetables/melon.json": ["", 34, 0, []]
    });
  });
  return promise;
}
