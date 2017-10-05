{
  expect(() => {
    runtime.requireModule(runtime.__mockRootPath, "./DoesntExist");
  }).toThrow(new Error("Cannot find module './DoesntExist' from 'root.js'"));
}
