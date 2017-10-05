{
  skipOnWindows.suite();
  describe("cli", () => {
    it("runs without errors", () => {
      const output = spawnSync(JEST_RUNTIME, [], {
        cwd: process.cwd(),
        encoding: "utf8",
        env: process.env
      });
      expect(output.stdout.trim()).toMatch(/›/);
    });
  });
}
