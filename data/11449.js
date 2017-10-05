{
  if (node.type === 2 || node.type === 3) {
    return false;
  }

  return (
    isBuiltInTag(node.tag) ||
    !isPlatformReservedTag(node.tag) ||
    !!node.component
  );
}
