{
  expect(fs.readFileSync.mock.calls.length).toBe(6);
  fs.readFileSync.mockClear();
  mockChangedFiles = Object.create(null);
  mockClocks = object({
    "/fruits": "c:fake-clock:3",
    "/vegetables": "c:fake-clock:4"
  });
  return new HasteMap(defaultConfig)
    .build()
    .then(({ __hasteMapForTest: data }) => {
      expect(fs.readFileSync.mock.calls.length).toBe(1);
      expect(fs.readFileSync).toBeCalledWith(cacheFilePath, "utf8");
      expect(data.clocks).toEqual(mockClocks);
      expect(data.files).toEqual(initialData.files);
      expect(data.map).toEqual(initialData.map);
    });
}
