{
  return (
    r.key === o.key &&
    ((r.tag === o.tag &&
      r.isComment === o.isComment &&
      e(r.data) === e(o.data) &&
      Be(r, o)) ||
      (n(r.isAsyncPlaceholder) &&
        r.asyncFactory === o.asyncFactory &&
        t(o.asyncFactory.error)))
  );
}
