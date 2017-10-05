{
  const files = object(initialData.files);
  delete files["/fruits/banana.js"];
  expect(data.files).toEqual(files);
  const map = object(initialData.map);
  delete map.Banana;
  expect(data.map).toEqual(map);
}
