{
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
}
