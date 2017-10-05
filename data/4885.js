{
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
}
