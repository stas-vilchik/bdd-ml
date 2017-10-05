{
  for (var i = 0, l = nodes.length, n; i < l && (n = nodes[i]); i++) {
    if (isImport(n)) {
      handleImport(n);
    }
  }
}
