{
  function getMockFnWithOriginalName(name) {
    const fn = () => {};

    Object.defineProperty(fn, "name", {
      value: name
    });
    return moduleMocker.generateFromMetadata(moduleMocker.getMetadata(fn));
  }

  expect(getMockFnWithOriginalName("foo-bar").name === "foo$bar").toBeTruthy();
  expect(
    getMockFnWithOriginalName("foo-bar-2").name === "foo$bar$2"
  ).toBeTruthy();
  expect(
    getMockFnWithOriginalName("foo-bar-3").name === "foo$bar$3"
  ).toBeTruthy();
  expect(getMockFnWithOriginalName("foo/bar").name === "foo$bar").toBeTruthy();
  expect(
    getMockFnWithOriginalName("foo𠮷bar").name === "foo𠮷bar"
  ).toBeTruthy();
}
