{
  if (OriginalHTMLTemplateElement) return wrap(unsafeUnwrap(this).content);
  return contentTable.get(this);
}
