{
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
}
