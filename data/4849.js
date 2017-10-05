{
  function waitForItToChange(hasteMap) {
    return new Promise((resolve, reject) => {
      hasteMap.once("change", resolve);
    });
  }

  function mockDeleteFile(dirPath, filePath) {
    const e = mockEmitters[dirPath];
    e.emit("all", "delete", filePath, dirPath, undefined);
  }

  function hm_it(title, fn, options) {
    options = options || {};
    (options.only ? it.only : it)(title, async () => {
      if (options.mockFs) {
        mockFs = options.mockFs;
      }

      const watchConfig = Object.assign({}, defaultConfig, {
        watch: true
      });
      const hm = new HasteMap(watchConfig);
      await hm.build();

      try {
        await fn(hm);
      } finally {
        hm.end();
      }
    });
  }

  hm_it("provides a new set of hasteHS and moduleMap", async hm => {
    const initialResult = await hm.build();
    const filePath = "/fruits/banana.js";
    expect(initialResult.hasteFS.getModuleName(filePath)).toBeDefined();
    expect(initialResult.moduleMap.getModule("Banana")).toBe(filePath);
    mockDeleteFile("/fruits", "banana.js");
    mockDeleteFile("/fruits", "banana.js");
    const { eventsQueue, hasteFS, moduleMap } = await waitForItToChange(hm);
    expect(eventsQueue).toHaveLength(1);
    const deletedBanana = {
      filePath,
      stat: undefined,
      type: "delete"
    };
    expect(eventsQueue).toEqual([deletedBanana]);
    expect(initialResult.hasteFS.getModuleName(filePath)).toBeDefined();
    expect(initialResult.moduleMap.getModule("Banana")).toBe(filePath);
    expect(hasteFS.getModuleName(filePath)).toBeNull();
    expect(moduleMap.getModule("Banana")).toBeNull();
  });
  const MOCK_STAT = {
    mtime: {
      getTime: () => 45
    }
  };
  hm_it("handles several change events at once", async hm => {
    mockFs["/fruits/tomato.js"] = [
      "/**",
      " * @providesModule Tomato",
      " */"
    ].join("\n");
    mockFs["/fruits/pear.js"] = ["/**", " * @providesModule Kiwi", " */"].join(
      "\n"
    );
    const e = mockEmitters["/fruits"];
    e.emit("all", "add", "tomato.js", "/fruits", MOCK_STAT);
    e.emit("all", "change", "pear.js", "/fruits", MOCK_STAT);
    const { eventsQueue, hasteFS, moduleMap } = await waitForItToChange(hm);
    expect(eventsQueue).toEqual([
      {
        filePath: "/fruits/tomato.js",
        stat: MOCK_STAT,
        type: "add"
      },
      {
        filePath: "/fruits/pear.js",
        stat: MOCK_STAT,
        type: "change"
      }
    ]);
    expect(hasteFS.getModuleName("/fruits/tomato.js")).not.toBeNull();
    expect(moduleMap.getModule("Tomato")).toBeDefined();
    expect(moduleMap.getModule("Pear")).toBeNull();
    expect(moduleMap.getModule("Kiwi")).toBe("/fruits/pear.js");
  });
  hm_it("does not emit duplicate change events", async hm => {
    const e = mockEmitters["/fruits"];
    e.emit("all", "change", "tomato.js", "/fruits", MOCK_STAT);
    e.emit("all", "change", "tomato.js", "/fruits", MOCK_STAT);
    const { eventsQueue } = await waitForItToChange(hm);
    expect(eventsQueue).toHaveLength(1);
  });
  hm_it(
    "emits a change even if a file in node_modules has changed",
    async hm => {
      const e = mockEmitters["/fruits"];
      e.emit("all", "add", "apple.js", "/fruits/node_modules/", MOCK_STAT);
      const { eventsQueue, hasteFS } = await waitForItToChange(hm);
      const filePath = "/fruits/node_modules/apple.js";
      expect(eventsQueue).toHaveLength(1);
      expect(eventsQueue).toEqual([
        {
          filePath,
          stat: MOCK_STAT,
          type: "add"
        }
      ]);
      expect(hasteFS.getModuleName(filePath)).toBeDefined();
    }
  );
  hm_it(
    "correctly tracks changes to both platform-specific versions of a single module name",
    async hm => {
      const { moduleMap: initMM } = await hm.build();
      expect(initMM.getModule("Orange", "ios")).toBeTruthy();
      expect(initMM.getModule("Orange", "android")).toBeTruthy();
      const e = mockEmitters["/fruits"];
      e.emit("all", "change", "Orange.ios.js", "/fruits/", MOCK_STAT);
      e.emit("all", "change", "Orange.android.js", "/fruits/", MOCK_STAT);
      const { eventsQueue, hasteFS, moduleMap } = await waitForItToChange(hm);
      expect(eventsQueue).toHaveLength(2);
      expect(eventsQueue).toEqual([
        {
          filePath: "/fruits/Orange.ios.js",
          stat: MOCK_STAT,
          type: "change"
        },
        {
          filePath: "/fruits/Orange.android.js",
          stat: MOCK_STAT,
          type: "change"
        }
      ]);
      expect(hasteFS.getModuleName("/fruits/Orange.ios.js")).toBeTruthy();
      expect(hasteFS.getModuleName("/fruits/Orange.android.js")).toBeTruthy();
      const iosVariant = moduleMap.getModule("Orange", "ios");
      expect(iosVariant).toBe("/fruits/Orange.ios.js");
      const androidVariant = moduleMap.getModule("Orange", "android");
      expect(androidVariant).toBe("/fruits/Orange.android.js");
    },
    {
      mockFs: {
        "/fruits/Orange.android.js": `/**
 * @providesModule Orange
 */
`,
        "/fruits/Orange.ios.js": `/**
* @providesModule Orange
*/
`
      }
    }
  );
  describe("recovery from duplicate module IDs", () => {
    async function setupDuplicates(hm) {
      mockFs["/fruits/pear.js"] = [
        "/**",
        " * @providesModule Pear",
        " */"
      ].join("\n");
      mockFs["/fruits/blueberry.js"] = [
        "/**",
        " * @providesModule Pear",
        " */"
      ].join("\n");
      const e = mockEmitters["/fruits"];
      e.emit("all", "change", "pear.js", "/fruits", MOCK_STAT);
      e.emit("all", "add", "blueberry.js", "/fruits", MOCK_STAT);
      const { hasteFS, moduleMap } = await waitForItToChange(hm);
      expect(hasteFS.exists("/fruits/blueberry.js")).toBe(true);

      try {
        moduleMap.getModule("Pear");
        throw new Error("should be unreachable");
      } catch (error) {
        const {
          DuplicateHasteCandidatesError
        } = require("../module_map").default;

        expect(error).toBeInstanceOf(DuplicateHasteCandidatesError);
        expect(error.hasteName).toBe("Pear");
        expect(error.platform).toBe("g");
        expect(error.supportsNativePlatform).toBe(false);
        expect(error.duplicatesSet).toEqual({
          "/fruits/blueberry.js": 0,
          "/fruits/pear.js": 0
        });
        expect(error.message).toMatchSnapshot();
      }
    }

    hm_it(
      "recovers when the oldest version of the duplicates is fixed",
      async hm => {
        await setupDuplicates(hm);
        mockFs["/fruits/pear.js"] = [
          "/**",
          " * @providesModule OldPear",
          " */"
        ].join("\n");
        const e = mockEmitters["/fruits"];
        e.emit("all", "change", "pear.js", "/fruits", MOCK_STAT);
        const { moduleMap } = await waitForItToChange(hm);
        expect(moduleMap.getModule("Pear")).toBe("/fruits/blueberry.js");
        expect(moduleMap.getModule("OldPear")).toBe("/fruits/pear.js");
        expect(moduleMap.getModule("Blueberry")).toBe(null);
      }
    );
    hm_it("recovers when the most recent duplicate is fixed", async hm => {
      await setupDuplicates(hm);
      mockFs["/fruits/blueberry.js"] = [
        "/**",
        " * @providesModule Blueberry",
        " */"
      ].join("\n");
      const e = mockEmitters["/fruits"];
      e.emit("all", "change", "blueberry.js", "/fruits", MOCK_STAT);
      const { moduleMap } = await waitForItToChange(hm);
      expect(moduleMap.getModule("Pear")).toBe("/fruits/pear.js");
      expect(moduleMap.getModule("Blueberry")).toBe("/fruits/blueberry.js");
    });
  });
}
