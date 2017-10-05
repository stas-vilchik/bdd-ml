{
  skipOnWindows.suite();
  beforeEach(() => {
    jest.resetModules();
    mockResponse = [
      "/fruits/pear.js",
      "/fruits/strawberry.js",
      "/fruits/tomato.js"
    ].join("\n");
  });
  it("crawls for files based on patterns", () => {
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
  });
  it("updates only changed files", () => {
    process.platform = "linux";
    nodeCrawl = require("../node");
    const files = Object.create(null);
    const tomato = ["", 33, 1, []];
    files["/fruits/strawberry.js"] = ["", 30, 1, []];
    files["/fruits/tomato.js"] = tomato;
    return nodeCrawl({
      data: {
        files
      },
      extensions: ["js"],
      ignore: pearMatcher,
      roots: ["/fruits"]
    }).then(data => {
      expect(data.files).toEqual({
        "/fruits/strawberry.js": ["", 32, 0, []],
        "/fruits/tomato.js": tomato
      });
      expect(data.files["/fruits/tomato.js"]).toBe(tomato);
    });
  });
  it("uses node fs APIs on windows", () => {
    process.platform = "win32";
    nodeCrawl = require("../node");
    const files = Object.create(null);
    return nodeCrawl({
      data: {
        files
      },
      extensions: ["js"],
      ignore: pearMatcher,
      roots: ["/fruits"]
    }).then(data => {
      expect(data.files).toEqual({
        "/fruits/directory/strawberry.js": ["", 33, 0, []],
        "/fruits/tomato.js": ["", 32, 0, []]
      });
    });
  });
  it('uses node fs APIs if "forceNodeFilesystemAPI" is set to true, regardless of platform', () => {
    process.platform = "linux";
    nodeCrawl = require("../node");
    const files = Object.create(null);
    return nodeCrawl({
      data: {
        files
      },
      extensions: ["js"],
      forceNodeFilesystemAPI: true,
      ignore: pearMatcher,
      roots: ["/fruits"]
    }).then(data => {
      expect(data.files).toEqual({
        "/fruits/directory/strawberry.js": ["", 33, 0, []],
        "/fruits/tomato.js": ["", 32, 0, []]
      });
    });
  });
  it("completes with emtpy roots", () => {
    process.platform = "win32";
    nodeCrawl = require("../node");
    const files = Object.create(null);
    return nodeCrawl({
      data: {
        files
      },
      extensions: ["js"],
      forceNodeFilesystemAPI: true,
      ignore: pearMatcher,
      roots: []
    }).then(data => {
      expect(data.files).toEqual({});
    });
  });
}
