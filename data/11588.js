{
  var markup = "<" + node.tag;
  var directives = context.directives;
  var modules = context.modules;

  if (isUndef(node.data) && hasAncestorData(node)) {
    node.data = {};
  }

  if (isDef(node.data)) {
    var dirs = node.data.directives;

    if (dirs) {
      for (var i = 0; i < dirs.length; i++) {
        var name = dirs[i].name;
        var dirRenderer = directives[name];

        if (dirRenderer && name !== "show") {
          dirRenderer(node, dirs[i]);
        }
      }
    }

    var vshowDirectiveInfo = getVShowDirectiveInfo(node);

    if (vshowDirectiveInfo) {
      directives.show(node, vshowDirectiveInfo);
    }

    for (var i$1 = 0; i$1 < modules.length; i$1++) {
      var res = modules[i$1](node);

      if (res) {
        markup += res;
      }
    }
  }

  var scopeId;
  var activeInstance = context.activeInstance;

  if (
    isDef(activeInstance) &&
    activeInstance !== node.context &&
    isDef((scopeId = activeInstance.$options._scopeId))
  ) {
    markup += " " + scopeId;
  }

  while (isDef(node)) {
    if (isDef((scopeId = node.context.$options._scopeId))) {
      markup += " " + scopeId;
    }

    node = node.parent;
  }

  return markup + ">";
}
