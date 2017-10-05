{
  var oldValue = unsafeUnwrap(this).getAttribute(name);
  unsafeUnwrap(this).removeAttribute(name);
  enqueAttributeChange(this, name, oldValue);
  invalidateRendererBasedOnAttribute(this, name);
}
