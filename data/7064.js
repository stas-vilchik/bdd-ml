{
  for (var i = 0, l = mxns.length, m; i < l && (m = mxns[i]); i++) {
    if (m.addedNodes) {
      handleImports(m.addedNodes);
    }
  }
}
