{
  expect(() => {
    ensureNoExpected({
      a: 1
    });
  }).toThrow("Matcher does not accept any arguments");
}
