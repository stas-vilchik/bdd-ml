createRuntime(__filename, {
  moduleFileExtensions: ["js", "jsx"],
  moduleNameMapper
}).then(runtime => {
  let exports = runtime.requireModuleOrMock(
    runtime.__mockRootPath,
    "image!not_really_a_module"
  );
  expect(exports.isGlobalImageStub).toBe(true);
  exports = runtime.requireModuleOrMock(runtime.__mockRootPath, "mappedToPath");
  expect(exports.isGlobalImageStub).toBe(true);
  exports = runtime.requireModuleOrMock(
    runtime.__mockRootPath,
    "mappedToModule"
  );
  expect(exports.moduleNameMapperResolutionWorks).toBe(true);
  exports = runtime.requireModuleOrMock(
    runtime.__mockRootPath,
    "mappedToDirectory"
  );
  expect(exports.isIndex).toBe(true);
  exports = runtime.requireModuleOrMock(runtime.__mockRootPath, "cat.png");
  expect(exports.isRelativeImageStub).toBe(true);
  exports = runtime.requireModuleOrMock(
    runtime.__mockRootPath,
    "../photos/dog.png"
  );
  expect(exports.isRelativeImageStub).toBe(true);
  exports = runtime.requireModuleOrMock(
    runtime.__mockRootPath,
    "module/name/test"
  );
  expect(exports).toBe("mapped_module");
  exports = runtime.requireModuleOrMock(
    runtime.__mockRootPath,
    "subdir1/style.css"
  );
  expect(exports.isManualMockModule).toBe(true);
});
