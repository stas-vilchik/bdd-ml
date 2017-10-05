{
  const node = path.node;

  if (node.name === "willRemove") {
    path.remove();
  }
}
