{
  for (var i = 0, l = mutations.length, m; i < l && (m = mutations[i]); i++) {
    if (m.type === "childList" && m.addedNodes.length) {
      this.addedNodes(m.addedNodes);
    }
  }
}
