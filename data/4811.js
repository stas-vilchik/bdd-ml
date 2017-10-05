{
  mockFs["/fruits1/__mocks__/subdir/blueberry.js"] = [
    "/**",
    " * @providesModule Blueberry1",
    " */"
  ].join("\n");
  mockFs["/fruits2/__mocks__/subdir/blueberry.js"] = [
    "/**",
    " * @providesModule Blueberry2",
    " */"
  ].join("\n");
  return new HasteMap(
    Object.assign(
      {
        mocksPattern: "__mocks__"
      },
      defaultConfig
    )
  )
    .build()
    .then(({ __hasteMapForTest: data }) => {
      expect(console.warn.mock.calls[0][0]).toMatchSnapshot();
    });
}
