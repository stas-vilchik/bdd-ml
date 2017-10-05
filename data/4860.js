{
  async function setupDuplicates(hm) {
    mockFs["/fruits/pear.js"] = ["/**", " * @providesModule Pear", " */"].join(
      "\n"
    );
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
}
