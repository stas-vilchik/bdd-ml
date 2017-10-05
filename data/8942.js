{
  if (node.type === 2) {
    return false;
  }

  if (node.type === 3) {
    return true;
  }

  return !!(
    node.pre ||
    (!node.hasBindings &&
      !node.if &&
      !node.for &&
      !isBuiltInTag(node.tag) &&
      isPlatformReservedTag(node.tag) &&
      !isDirectChildOfTemplateFor(node) &&
      Object.keys(node).every(isStaticKey))
  );
}
