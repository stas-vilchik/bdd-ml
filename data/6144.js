{
  const mean =
    (meanTest - meanControl) / meanControl -
    Math.pow(semControl, 2) * meanTest / Math.pow(meanControl, 3);
  const variance =
    Math.pow(semTest / meanControl, 2) +
    Math.pow(semControl * meanTest, 2) / Math.pow(meanControl, 4);
  return [mean, Math.sqrt(variance)];
}
