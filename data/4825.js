{
  return new HasteMap(defaultConfig)
    .build()
    .then(({ __hasteMapForTest: initialData }) => {
      fs.readFileSync.mockClear();
      delete mockFs["/fruits/banana.js"];
      mockChangedFiles = object({
        "/fruits/banana.js": null
      });
      mockClocks = object({
        "/fruits": "c:fake-clock:3",
        "/vegetables": "c:fake-clock:2"
      });
      return new HasteMap(defaultConfig)
        .build()
        .then(({ __hasteMapForTest: data }) => {
          const files = object(initialData.files);
          delete files["/fruits/banana.js"];
          expect(data.files).toEqual(files);
          const map = object(initialData.map);
          delete map.Banana;
          expect(data.map).toEqual(map);
        });
    });
}
