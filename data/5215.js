{
  const root = runtime.requireModule(runtime.__mockRootPath, "./root.js");
  root.jest.resetModuleRegistry();
  root.jest.unmock("ManuallyMocked");
  const exports = runtime.requireModule(
    runtime.__mockRootPath,
    "ManuallyMocked"
  );
  expect(exports.isManualMockModule).toBe(false);
}
