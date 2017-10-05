{
  const messages = formatResultsErrors(
    [
      {
        ancestorTitles: [],
        failureMessages: [unixStackTrace],
        title: "Unix test"
      }
    ],
    {
      rootDir: ""
    },
    {
      noStackTrace: false
    }
  );
  expect(messages).toMatchSnapshot();
}
