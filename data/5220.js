Promise.all([
  createRuntime(__filename).then(runtime => {
    const exports = runtime.requireModule(runtime.__mockRootPath, "Platform");
    expect(exports.platform).toBe("default");
  }),
  createRuntime(__filename, {
    haste: {
      defaultPlatform: "ios",
      platforms: ["ios", "android"]
    }
  }).then(runtime => {
    const exports = runtime.requireModule(runtime.__mockRootPath, "Platform");
    expect(exports.platform).toBe("ios");
  }),
  createRuntime(__filename, {
    haste: {
      platforms: ["ios", "android"]
    }
  }).then(runtime => {
    const exports = runtime.requireModule(runtime.__mockRootPath, "Platform");
    expect(exports.platform).toBe("default");
  }),
  createRuntime(__filename, {
    haste: {
      defaultPlatform: "android",
      platforms: ["ios", "android"]
    }
  }).then(runtime => {
    const exports = runtime.requireModule(runtime.__mockRootPath, "Platform");
    expect(exports.platform).toBe("android");
  }),
  createRuntime(__filename, {
    haste: {
      defaultPlatform: "windows",
      platforms: ["ios", "android", "native", "windows"]
    }
  }).then(runtime => {
    const exports = runtime.requireModule(runtime.__mockRootPath, "Platform");
    expect(exports.platform).toBe("native");
  })
]);
