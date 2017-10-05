{
  beforeEach(() => {
    createRuntime = require("createRuntime");
  });
  describe("jest.spyOn", () => {
    it("calls the original function", () =>
      createRuntime(__filename).then(runtime => {
        const root = runtime.requireModule(runtime.__mockRootPath);
        let isOriginalCalled = false;
        const obj = {
          method: () => {
            isOriginalCalled = true;
          }
        };
        const spy = root.jest.spyOn(obj, "method");
        obj.method();
        expect(isOriginalCalled).toBe(true);
        expect(spy).toHaveBeenCalled();
      }));
  });
}
