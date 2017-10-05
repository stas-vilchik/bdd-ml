{
  expect(() => {
    runtime.requireModule(runtime.__mockRootPath, "not-a-haste-package");
  }).toThrow(
    new Error("Cannot find module 'not-a-haste-package' from 'root.js'")
  );
}
