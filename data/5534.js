{
  const results = await Lighthouse(`http://localhost:8080/${benchmark}/`, {
    output: 'json',
    disableCpuThrottling: false,
    disableNetworkThrottling: false
  }, config);
  const perfMarkings = results.audits['user-timings'].extendedInfo.value;
  const entries = perfMarkings.filter(marker => !marker.isMark).map(({
    duration,
    name
  }) => ({
    entry: name,
    time: duration
  }));
  entries.push({
    entry: 'First Meaningful Paint',
    time: results.audits['first-meaningful-paint'].rawValue
  });
  return entries;
}