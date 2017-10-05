{
  var hit = cache[str];
  return hit || (cache[str] = fn(str));
}
