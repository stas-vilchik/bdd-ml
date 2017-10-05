{
  expect(fs.readFileSync.mock.calls.length).toBe(2);
  expect(fs.readFileSync).toBeCalledWith(cacheFilePath, "utf8");
  expect(fs.readFileSync).toBeCalledWith("/fruits/banana.js", "utf8");
  expect(data.clocks).toEqual(mockClocks);
  const files = object(initialData.files);
  files["/fruits/banana.js"] = ["Kiwi", 32, 1, ["Raspberry"]];
  expect(data.files).toEqual(files);
  const map = object(initialData.map);
  map.Kiwi = map.Banana;
  delete map.Banana;
  expect(data.map).toEqual(map);
}
