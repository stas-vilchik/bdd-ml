{
  expect(fs.readFileSync.mock.calls.length).toBe(1);
  expect(fs.readFileSync).toBeCalledWith(cacheFilePath, "utf8");
  expect(data.clocks).toEqual(mockClocks);
  expect(data.files).toEqual(initialData.files);
  expect(data.map).toEqual(initialData.map);
}
