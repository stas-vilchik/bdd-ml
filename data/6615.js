{
  adoptNodesIfNeeded(owner, nodes);
  var length = nodes.length;
  if (length === 1) return unwrap(nodes[0]);
  var df = unwrap(owner.ownerDocument.createDocumentFragment());

  for (var i = 0; i < length; i++) {
    df.appendChild(unwrap(nodes[i]));
  }

  return df;
}
