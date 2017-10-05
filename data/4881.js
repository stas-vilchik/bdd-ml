{
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
}
