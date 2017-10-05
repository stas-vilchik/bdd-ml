{
  if (path.get("callee").matchesPattern("Object.assign")) {
    var id = getAssignIdent(path, file, this);
    path.node.callee = id;
  }
}
