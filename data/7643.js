{
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
}
