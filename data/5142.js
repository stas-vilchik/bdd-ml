{
  runtime.requireMock(runtime.__mockRootPath, "fs");
  expect(
    runtime.requireMock(runtime.__mockRootPath, "events").EventEmitter
  ).toBeDefined();
}
