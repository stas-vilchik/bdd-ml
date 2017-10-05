{
  expect(watchman).toBeCalled();
  expect(node).toBeCalled();
  expect(data.files).toEqual({
    "/fruits/banana.js": ["Banana", 32, 1, ["Strawberry"]]
  });
}
