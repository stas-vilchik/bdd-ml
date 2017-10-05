{
  if (!nodes.length) return;
  var ownerDoc = owner.ownerDocument;
  if (ownerDoc === nodes[0].ownerDocument) return;

  for (var i = 0; i < nodes.length; i++) {
    scope.adoptNodeNoRemove(nodes[i], ownerDoc);
  }
}
