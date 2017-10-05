{
  const modulePath = path.resolve(
    path.dirname(runtime.__mockRootPath),
    "internal-root.js"
  );
  expect(() => {
    runtime.requireModule(modulePath);
  }).toThrow(new Error("preprocessor must not run."));
}
