{
  it("warns when requestAnimationFrame is not polyfilled in the browser", () => {
    const previousRAF = global.requestAnimationFrame;

    try {
      global.requestAnimationFrame = undefined;
      jest.resetModules();
      spyOn(console, "error");

      require("react-dom");

      expect(console.error.calls.count()).toBe(1);
      expect(console.error.calls.argsFor(0)[0]).toContain(
        "React depends on requestAnimationFrame."
      );
    } finally {
      global.requestAnimationFrame = previousRAF;
    }
  });
  it("can import findDOMNode in Node environment", () => {
    const previousRAF = global.requestAnimationFrame;
    const previousRIC = global.requestIdleCallback;
    const prevWindow = global.window;

    try {
      global.requestAnimationFrame = undefined;
      global.requestIdleCallback = undefined;
      delete global.window;
      jest.resetModules();
      expect(() => {
        require("react-dom");
      }).not.toThrow();
    } finally {
      global.requestAnimationFrame = previousRAF;
      global.requestIdleCallback = previousRIC;
      global.window = prevWindow;
    }
  });
}
