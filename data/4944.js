{
  const message = formatExecError(
    {
      testExecError: {
        message: "Whoops!"
      },
      testFilePath: "/test/error/file/path"
    },
    {
      rootDir: ""
    },
    {
      noStackTrace: false
    },
    "path_test"
  );
  expect(message).toMatchSnapshot();
}
