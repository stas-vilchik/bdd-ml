{
  var def = this.registerRoot(root, name, extendsName);
  this.replaceTextInStyles(def.rootStyles, this.insertDirectives);
  this.removeStyles(root, def.rootStyles);

  if (this.strictStyling) {
    this.applyScopeToContent(root, name);
  }

  return def.scopeStyles;
}
