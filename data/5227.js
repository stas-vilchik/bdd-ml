{
  const exports = runtime.requireModule(
    runtime.__mockRootPath,
    "./utf8_with_bom.js"
  );
  expect(exports).toBe("isModuleEncodedInUTF8WithBOM");
}
