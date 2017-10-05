{
  expect(data.files).not.toBe(mockFiles);
  expect(data.clocks).toEqual({
    "/fruits": "c:fake-clock:5",
    "/vegetables": "c:fake-clock:6"
  });
  expect(data.files).toEqual({
    "/fruits/banana.js": mockMetadata,
    "/fruits/kiwi.js": ["", 42, 0, []],
    "/fruits/tomato.js": mockFiles["/fruits/tomato.js"]
  });
  expect(data.files["/fruits/banana.js"]).toBe(mockMetadata);
  expect(data.files["/fruits/tomato.js"]).toBe(mockFiles["/fruits/tomato.js"]);
}
