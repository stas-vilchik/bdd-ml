{
  const means = [];

  for (let i = 0; i < 10000; i++) {
    means.push(stats.mean(bootstrap(data)));
  }

  return stats.stdev(means);
}
