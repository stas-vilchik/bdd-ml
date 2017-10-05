{
  const data = [];
  const averages = [];
  runs.forEach((entries, x) => {
    entries.forEach(({ entry, time }, i) => {
      if (i >= averages.length) {
        data.push([time]);
        averages.push({
          entry,
          mean: 0,
          sem: 0
        });
      } else {
        data[i].push(time);

        if (x === runs.length - 1) {
          const dataWithoutOutliers = stats.filterMADoutliers(data[i]);
          averages[i].mean = stats.mean(dataWithoutOutliers);
          averages[i].sem = calculateStandardErrorOfMean(data[i]);
        }
      }
    });
  });
  return averages;
}
