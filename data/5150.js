{
  const moduleData = nodeModule();
  expect(moduleData.isUnmocked()).toBe(true);
  expect(moduleData.transitiveNPM3Dep).toEqual("npm3-transitive-dep");
  expect(moduleData.internalImplementation()).toEqual("internal-module-code");
}
