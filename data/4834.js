{
  expect(Object.keys(data.files).length).toBe(5);
  expect(data.files["/fruits/invalid/file.js"]).toBe(undefined);
}
