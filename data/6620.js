{
  var clone;
  if (opt_doc)
    clone = wrap(originalImportNode.call(opt_doc, unsafeUnwrap(node), false));
  else clone = wrap(originalCloneNode.call(unsafeUnwrap(node), false));

  if (deep) {
    for (var child = node.firstChild; child; child = child.nextSibling) {
      clone.appendChild(cloneNode(child, true, opt_doc));
    }

    if (node instanceof wrappers.HTMLTemplateElement) {
      var cloneContent = clone.content;

      for (
        var child = node.content.firstChild;
        child;
        child = child.nextSibling
      ) {
        cloneContent.appendChild(cloneNode(child, true, opt_doc));
      }
    }
  }

  return clone;
}
