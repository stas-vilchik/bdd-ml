{
  if ("value" in compositionState._root) {
    return compositionState._root.value;
  }

  return compositionState._root[getTextContentAccessor()];
}
