{
  return (
    "scopedSlots:_u([" +
    Object.keys(slots)
      .map(function(key) {
        return genScopedSlot(key, slots[key], state);
      })
      .join(",") +
    "])"
  );
}
