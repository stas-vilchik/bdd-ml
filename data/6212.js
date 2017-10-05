{
  vorpal.log(chalk.gray(`Executing ${chalk.underline(command)}`));

  if (DRY_RUN) {
    return "";
  }

  return execSync(command, {
    cwd: PATH_TO_REPO,
    encoding: "utf8"
  }).trim();
}
