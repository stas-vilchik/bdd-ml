{
  var Observer = function(addCallback) {
    this.addCallback = addCallback;
    this.mo = new MutationObserver(this.handler.bind(this));
  };

  Observer.prototype = {
    handler: function(mutations) {
      for (
        var i = 0, l = mutations.length, m;
        i < l && (m = mutations[i]);
        i++
      ) {
        if (m.type === "childList" && m.addedNodes.length) {
          this.addedNodes(m.addedNodes);
        }
      }
    },
    addedNodes: function(nodes) {
      if (this.addCallback) {
        this.addCallback(nodes);
      }

      for (
        var i = 0, l = nodes.length, n, loading;
        i < l && (n = nodes[i]);
        i++
      ) {
        if (n.children && n.children.length) {
          this.addedNodes(n.children);
        }
      }
    },
    observe: function(root) {
      this.mo.observe(root, {
        childList: true,
        subtree: true
      });
    }
  };
  scope.Observer = Observer;
}
