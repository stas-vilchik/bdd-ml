{
  expect(ReactDebugTool.isProfiling()).toBe(false);
  ReactDebugTool.beginProfiling();
  expect(ReactDebugTool.isProfiling()).toBe(true);
  ReactDebugTool.endProfiling();
  expect(ReactDebugTool.isProfiling()).toBe(false);
}
