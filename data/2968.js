{
  const sourceType = test.isModule ? "module" : "script";

  try {
    parse(test.content, {
      sourceType: sourceType,
      plugins: plugins
    });
    test.actualError = false;
  } catch (err) {
    test.actualError = true;
  }

  test.result = test.expectedError !== test.actualError ? "fail" : "pass";
  return test;
}
