{
  watchmanCrawl = require("../watchman");
  mockResponse = {
    "/fruits": {
      clock: "c:fake-clock:1",
      files: [
        {
          exists: true,
          mtime_ms: {
            toNumber: () => 30
          },
          name: "strawberry.js"
        },
        {
          exists: true,
          mtime_ms: {
            toNumber: () => 31
          },
          name: "tomato.js"
        },
        {
          exists: true,
          mtime_ms: {
            toNumber: () => 32
          },
          name: "pear.js"
        }
      ],
      is_fresh_instance: true,
      version: "4.5.0"
    },
    "/vegetables": {
      clock: "c:fake-clock:2",
      files: [
        {
          exists: true,
          mtime_ms: {
            toNumber: () => 33
          },
          name: "melon.json"
        }
      ],
      is_fresh_instance: true,
      version: "4.5.0"
    }
  };
  mockFiles = Object.assign(Object.create(null), {
    "/fruits/strawberry.js": ["", 30, 0, []],
    "/fruits/tomato.js": ["", 31, 0, []],
    "/vegetables/melon.json": ["", 33, 0, []]
  });
}
