{
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
}
