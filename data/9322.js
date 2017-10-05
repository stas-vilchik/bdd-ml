{
  return (
    "scopedSlots:_u([" +
    Object.keys(t)
      .map(function(n) {
        return ti(n, t[n], e);
      })
      .join(",") +
    "])"
  );
}
