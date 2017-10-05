{
  const [mean, sd] = calculateMeanAndSdOfRatioFromDeltaMethod(
    prev,
    current,
    prevSem,
    currentSem
  );
  const pctChange = +(mean * 100).toFixed(1);
  const ci95 = +(100 * 1.96 * sd).toFixed(1);
  const ciInfo = ci95 > 0 ? ` +- ${ci95} %` : "";
  const text = `${pctChange > 0 ? "+" : ""}${pctChange} %${ciInfo}`;

  if (pctChange + ci95 < 0) {
    return chalk.green(text);
  } else if (pctChange - ci95 > 0) {
    return chalk.red(text);
  } else {
    return text;
  }
}
