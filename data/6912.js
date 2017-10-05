{
  originalAdoptNode.call(unsafeUnwrap(doc), unwrap(node));
  adoptSubtree(node, doc);
}
