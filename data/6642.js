{
  return originalCompareDocumentPosition.call(
    unsafeUnwrap(this),
    unwrapIfNeeded(otherNode)
  );
}
