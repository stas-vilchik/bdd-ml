{
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
}
