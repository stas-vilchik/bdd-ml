{
  const columns = process.stdout.columns || 80;
  const WIDTH = columns - stringLength(OK) + 1;
  const strs = str.match(new RegExp(`(.{1,${WIDTH}})`, "g"));
  let lastString = strs[strs.length - 1];

  if (lastString.length < WIDTH) {
    lastString += Array(WIDTH - lastString.length).join(chalk.dim("."));
  }

  return strs
    .slice(0, -1)
    .concat(lastString)
    .join("\n");
}
