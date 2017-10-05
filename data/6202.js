{
  const patterns = config[key].patterns;
  const options = config[key].options;
  const ignore = config[key].ignore;
  const globPattern =
    patterns.length > 1 ? `{${patterns.join(",")}}` : `${patterns.join(",")}`;
  const files = glob
    .sync(globPattern, {
      ignore
    })
    .filter(f => !onlyChanged || changedFiles.has(f));

  if (!files.length) {
    return;
  }

  const args = Object.keys(defaultOptions).map(
    k => `--${k}=${(options && options[k]) || defaultOptions[k]}`
  );
  args.push(`--${shouldWrite ? "write" : "l"}`);

  try {
    exec(prettierCmd, [...args, ...files]).trim();
  } catch (e) {
    if (!shouldWrite) {
      console.log(
        "\n" +
          chalk.red(
            `  This project uses prettier to format all JavaScript code.\n`
          ) +
          chalk.dim(`    Please run `) +
          chalk.reset("yarn prettier-all") +
          chalk.dim(` and add changes to files listed below to your commit:`) +
          `\n\n` +
          e.stdout
      );
      process.exit(1);
    }

    throw e;
  }
}
