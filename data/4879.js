{
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
}
