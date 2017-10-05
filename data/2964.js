{
  const scenarios = [];
  const base = {
    fileName: fileName,
    isModule: modulePattern.test(testContent),
    expectedError: hasEarlyError(testContent)
  };
  const isNoStrict = noStrictPattern.test(testContent);
  const isOnlyStrict = onlyStrictPattern.test(testContent);
  const isRaw = rawPattern.test(testContent);

  if (!isOnlyStrict) {
    scenarios.push(
      Object.assign(
        {
          id: fileName + "(default)",
          content: testContent
        },
        base
      )
    );
  }

  if (!isNoStrict && !isRaw) {
    scenarios.push(
      Object.assign(
        {
          id: fileName + "(strict mode)",
          content: "'use strict';\n" + testContent
        },
        base
      )
    );
  }

  return scenarios;
}
