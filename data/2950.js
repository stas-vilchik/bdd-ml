{
  const shouldSuccess =
    test.expected_ast &&
    (!Array.isArray(test.expected_ast.errors) ||
      test.expected_ast.errors.length === 0);
  const inWhitelist = whitelist.indexOf(test.file) > -1;
  const babylonOptions = Object.assign({}, options);
  babylonOptions.plugins = babylonOptions.plugins.slice();

  if (test.options) {
    Object.keys(test.options).forEach(option => {
      if (!test.options[option]) return;
      if (!flowOptionsMapping[option])
        throw new Error("Parser options not mapped " + option);
      babylonOptions.plugins.push(flowOptionsMapping[option]);
    });
  }

  let failed = false;
  let exception = null;

  try {
    parse(test.content, babylonOptions);
  } catch (e) {
    exception = e;
    failed = true;

    try {
      parse(
        test.content,
        Object.assign({}, babylonOptions, {
          sourceType: "script"
        })
      );
      exception = null;
      failed = false;
    } catch (e) {}
  }

  const isSuccess = shouldSuccess !== failed;
  const isAllowed = isSuccess !== inWhitelist;
  summary[isAllowed ? "allowed" : "disallowed"][
    isSuccess ? "success" : "failure"
  ].push({
    test,
    exception,
    shouldSuccess,
    babylonOptions
  });
  summary.passed &= isAllowed;
  unrecognized.delete(test.file);
  process.stdout.write(chalk.gray("."));
}
