{
  const root = runtime.requireModule(runtime.__mockRootPath);
  root.jest.unmock("RegularModule");
  const exports = runtime.requireModuleOrMock(
    runtime.__mockRootPath,
    "RegularModule"
  );
  expect(exports.isRealModule).toBe(true);
}
