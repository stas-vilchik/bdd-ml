{
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(
    null,
    durations.map(function(d, i) {
      return toMs(d) + toMs(delays[i]);
    })
  );
}
