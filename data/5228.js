createRuntime(__filename).then(runtime => {
  const exports = runtime.requireModule(
    runtime.__mockRootPath,
    "./utf8_with_bom.json"
  );
  expect(exports.isJSONModuleEncodedInUTF8WithBOM).toBe(true);
});
