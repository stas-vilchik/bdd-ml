{
  console.log(chalk.red(`✘ ${test.file}`));

  if (shouldSuccess) {
    console.log(
      chalk.yellow(
        "  Correctly parsed successfully, but" +
          " was disallowed by the whitelist"
      )
    );
  } else {
    console.log(
      chalk.yellow(
        "  Correctly failed parsing, but" + " was disallowed by the whitelist"
      )
    );
  }

  console.log(
    chalk.yellow(`  Active plugins: ${JSON.stringify(babylonOptions.plugins)}`)
  );
}
