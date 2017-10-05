{
  var nodes = snapshotNodeList(this.childNodes);
  var remNodes = [];
  var s = "";
  var modNode;

  for (var i = 0, n; i < nodes.length; i++) {
    n = nodes[i];

    if (n.nodeType === Node.TEXT_NODE) {
      if (!modNode && !n.data.length) this.removeNode(n);
      else if (!modNode) modNode = n;
      else {
        s += n.data;
        remNodes.push(n);
      }
    } else {
      if (modNode && remNodes.length) {
        modNode.data += s;
        cleanupNodes(remNodes);
      }

      remNodes = [];
      s = "";
      modNode = null;
      if (n.childNodes.length) n.normalize();
    }
  }

  if (modNode && remNodes.length) {
    modNode.data += s;
    cleanupNodes(remNodes);
  }
}
