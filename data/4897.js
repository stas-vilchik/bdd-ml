{
  mockResponse = {
    "/fruits": {
      clock: "c:fake-clock:5",
      files: [
        {
          exists: true,
          mtime_ms: {
            toNumber: () => 42
          },
          name: "kiwi.js"
        },
        {
          exists: true,
          mtime_ms: {
            toNumber: () => 41
          },
          name: "banana.js"
        },
        {
          exists: true,
          mtime_ms: {
            toNumber: () => 31
          },
          name: "tomato.js"
        }
      ],
      is_fresh_instance: true,
      version: "4.5.0"
    },
    "/vegetables": {
      clock: "c:fake-clock:6",
      files: [],
      is_fresh_instance: true,
      version: "4.5.0"
    }
  };
  const mockMetadata = ["Banana", 41, 1, ["Raspberry"]];
  mockFiles["/fruits/banana.js"] = mockMetadata;
  const clocks = Object.assign(Object.create(null), {
    "/fruits": "c:fake-clock:1",
    "/vegetables": "c:fake-clock:2"
  });
  return watchmanCrawl({
    data: {
      clocks,
      files: mockFiles
    },
    extensions: ["js", "json"],
    ignore: pearMatcher,
    roots: ["/fruits", "/vegetables"]
  }).then(data => {
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
    expect(data.files["/fruits/tomato.js"]).toBe(
      mockFiles["/fruits/tomato.js"]
    );
  });
}
