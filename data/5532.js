{
  if (path.matchesPattern("Object.assign")) {
    var id = getAssignIdent(path, file, this);
    path.replaceWith(id);
  }
}
