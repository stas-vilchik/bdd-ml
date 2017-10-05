{
  return (
    !!e.constructor &&
    "function" == typeof e.constructor.isBuffer &&
    e.constructor.isBuffer(e)
  );
}
