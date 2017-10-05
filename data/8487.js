{
  if (cb) {
    try {
      cb.call(ctx);
    } catch (e) {
      handleError(e, ctx, "nextTick");
    }
  } else if (_resolve) {
    _resolve(ctx);
  }
}
