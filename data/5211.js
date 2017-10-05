{
  const exports1 = runtime.requireModule(
    runtime.__mockRootPath,
    "./JSONFile.json"
  );
  const exports2 = runtime.requireModule(
    runtime.__mockRootPath,
    "./JSONFile.json"
  );
  expect(exports1.isJSONModule).toBe(true);
  expect(exports2.isJSONModule).toBe(true);
  expect(exports1).toBe(exports2);
}
