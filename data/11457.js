{
  return el.children.length
    ? "_ssrNode(" + flattenSegments(childrenToSegments(el, state)) + ")"
    : "";
}
