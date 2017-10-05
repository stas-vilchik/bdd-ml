{
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
}
