{
  var root = originalCreateShadowRoot.call(this);
  CustomElements.watchShadow(this);
  return root;
}
