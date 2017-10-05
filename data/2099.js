{
  return bar.apply(
    void 0,
    ["test"].concat(Array.prototype.slice.call(arguments))
  );
}
