{
  mockResponse = {
    "/fruits": {
      clock: "c:fake-clock:3",
      files: [
        {
          exists: true,
          mtime_ms: {
            toNumber: () => 42
          },
          name: "kiwi.js"
        },
        {
          exists: false,
          mtime_ms: null,
          name: "tomato.js"
        }
      ],
      is_fresh_instance: false,
      version: "4.5.0"
    },
    "/vegetables": {
      clock: "c:fake-clock:4",
      files: [],
      version: "4.5.0"
    }
  };
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
    expect(data.files).toBe(mockFiles);
    expect(data.clocks).toEqual({
      "/fruits": "c:fake-clock:3",
      "/vegetables": "c:fake-clock:4"
    });
    expect(data.files).toEqual({
      "/fruits/kiwi.js": ["", 42, 0, []],
      "/fruits/strawberry.js": ["", 30, 0, []],
      "/vegetables/melon.json": ["", 33, 0, []]
    });
  });
}
