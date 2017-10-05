{
  var def = (this.registry[name] = {
    root: root,
    name: name,
    extendsName: extendsName
  });
  var styles = this.findStyles(root);
  def.rootStyles = styles;
  def.scopeStyles = def.rootStyles;
  var extendee = this.registry[def.extendsName];

  if (extendee) {
    def.scopeStyles = extendee.scopeStyles.concat(def.scopeStyles);
  }

  return def;
}
