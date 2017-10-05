{
  console.log(chalk.red(`✘ ${test.file}`));

  if (shouldSuccess) {
    console.log(chalk.yellow("  Should parse successfully, but did not"));
    console.log(chalk.yellow(`  Failed with: \`${exception.message}\``));
  } else {
    console.log(chalk.yellow("  Should fail parsing, but did not"));
  }

  console.log(
    chalk.yellow(`  Active plugins: ${JSON.stringify(babylonOptions.plugins)}`)
  );
}
