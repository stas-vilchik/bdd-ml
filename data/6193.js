{
  const expectation = expect(actual);

  if (global.__suppressDevFailures) {
    Object.keys(expectation).forEach(name => {
      wrapDevMatcher(expectation, name);
      wrapDevMatcher(expectation.not, name);
    });
  }

  return expectation;
}
