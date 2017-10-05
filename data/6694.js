{
  var oldValue = unsafeUnwrap(this).getAttribute(name);
  unsafeUnwrap(this).setAttribute(name, value);
  enqueAttributeChange(this, name, oldValue);
  invalidateRendererBasedOnAttribute(this, name);
}
