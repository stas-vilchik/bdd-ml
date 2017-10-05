{
  return new HasteMap(defaultConfig)
    .build()
    .then(({ __hasteMapForTest: initialData }) => {
      fs.readFileSync.mockClear();
      mockChangedFiles = object({
        "/fruits/banana.js": [
          "/**",
          " * @providesModule Kiwi",
          " */",
          'const Raspberry = require("Raspberry");'
        ].join("\n")
      });
      mockClocks = object({
        "/fruits": "c:fake-clock:3",
        "/vegetables": "c:fake-clock:2"
      });
      return new HasteMap(defaultConfig)
        .build()
        .then(({ __hasteMapForTest: data }) => {
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
        });
    });
}
