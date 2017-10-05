{
  return wrap(this || window).getComputedStyle(unwrapIfNeeded(el), pseudo);
}
