{
  spyOn(console, "error");
  ReactDebugTool.addHook({
    onTestEvent() {
      throw new Error("Hi.");
    }
  });
  ReactDebugTool.onTestEvent();
  expectDev(console.error.calls.count()).toBe(1);
  expectDev(console.error.calls.argsFor(0)[0]).toContain(
    "Exception thrown by hook while handling " + "onTestEvent: Error: Hi."
  );
  ReactDebugTool.onTestEvent();
  expectDev(console.error.calls.count()).toBe(1);
}
