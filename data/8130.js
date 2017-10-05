{
  var this$1 = this;

  for (var key in this$1.cache) {
    pruneCacheEntry(this$1.cache[key]);
  }
}
