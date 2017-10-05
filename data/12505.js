{
  var el = instance.document.getRef(nodeId);

  if (el) {
    return instance.document.fireEvent(el, type, e, domChanges);
  }

  return new Error('invalid element reference "' + nodeId + '"');
}
