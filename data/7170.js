{
  if (flags.dom) {
    var mx = mutations[0];

    if (mx && mx.type === "childList" && mx.addedNodes) {
      if (mx.addedNodes) {
        var d = mx.addedNodes[0];

        while (d && d !== document && !d.host) {
          d = d.parentNode;
        }

        var u = (d && (d.URL || d._URL || (d.host && d.host.localName))) || "";
        u = u
          .split("/?")
          .shift()
          .split("/")
          .pop();
      }
    }

    console.group("mutations (%d) [%s]", mutations.length, u || "");
  }

  mutations.forEach(function(mx) {
    if (mx.type === "childList") {
      forEach(mx.addedNodes, function(n) {
        if (!n.localName) {
          return;
        }

        addedNode(n);
      });
      forEach(mx.removedNodes, function(n) {
        if (!n.localName) {
          return;
        }

        detachedNode(n);
      });
    }
  });
  flags.dom && console.groupEnd();
}
