{
  return (
    r.key === i.key &&
    ((r.tag === i.tag &&
      r.isComment === i.isComment &&
      e(r.data) === e(i.data) &&
      Ve(r, i)) ||
      (n(r.isAsyncPlaceholder) &&
        r.asyncFactory === i.asyncFactory &&
        t(i.asyncFactory.error)))
  );
}
