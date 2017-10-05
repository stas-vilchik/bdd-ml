{
  ("use strict");

  function TreeScope(root, parent) {
    this.root = root;
    this.parent = parent;
  }

  TreeScope.prototype = {
    get renderer() {
      if (this.root instanceof scope.wrappers.ShadowRoot) {
        return scope.getRendererForHost(this.root.host);
      }

      return null;
    },

    contains: function(treeScope) {
      for (; treeScope; treeScope = treeScope.parent) {
        if (treeScope === this) return true;
      }

      return false;
    }
  };

  function setTreeScope(node, treeScope) {
    if (node.treeScope_ !== treeScope) {
      node.treeScope_ = treeScope;

      for (var sr = node.shadowRoot; sr; sr = sr.olderShadowRoot) {
        sr.treeScope_.parent = treeScope;
      }

      for (var child = node.firstChild; child; child = child.nextSibling) {
        setTreeScope(child, treeScope);
      }
    }
  }

  function getTreeScope(node) {
    if (node instanceof scope.wrappers.Window) {
      debugger;
    }

    if (node.treeScope_) return node.treeScope_;
    var parent = node.parentNode;
    var treeScope;
    if (parent) treeScope = getTreeScope(parent);
    else treeScope = new TreeScope(node, null);
    return (node.treeScope_ = treeScope);
  }

  scope.TreeScope = TreeScope;
  scope.getTreeScope = getTreeScope;
  scope.setTreeScope = setTreeScope;
}
