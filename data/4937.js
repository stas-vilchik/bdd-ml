{
  expect(() => {
    ensureNoExpected(
      {
        a: 1
      },
      ".toBeDefined"
    );
  }).toThrow("Matcher does not accept any arguments");
}
