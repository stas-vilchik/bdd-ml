{
  if (nodeIsImport(node) && node.import === undefined) {
    return false;
  }

  return true;
}
