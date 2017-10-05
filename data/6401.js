{
  const change = Math.floor((current - prev) / prev * 100);

  if (change > 0) {
    return chalk.red.bold(`+${change} %`);
  } else if (change <= 0) {
    return chalk.green.bold(change + " %");
  }
}
