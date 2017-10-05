{
  return nativeRaf(function() {
    callback(performance.now());
  });
}
