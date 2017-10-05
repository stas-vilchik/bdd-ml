{
  try {
    originalRemoveChild.call(parent, child);
  } catch (ex) {
    if (!(parent instanceof OriginalDocumentFragment)) throw ex;
  }
}
