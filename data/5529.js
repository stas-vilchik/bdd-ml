{
  const t = babel.types;

  function getAssignIdent(path, file, state) {
    if (!state.id) {
      state.id = path.scope.generateUidIdentifier("assign");
      path.scope.getProgramParent().push({
        id: state.id,
        init: t.callExpression(t.identifier("require"), [
          t.stringLiteral("object-assign")
        ])
      });
    }

    return state.id;
  }

  return {
    pre: function() {
      this.id = null;
    },
    visitor: {
      CallExpression: function(path, file) {
        if (path.get("callee").matchesPattern("Object.assign")) {
          var id = getAssignIdent(path, file, this);
          path.node.callee = id;
        }
      },
      MemberExpression: function(path, file) {
        if (path.matchesPattern("Object.assign")) {
          var id = getAssignIdent(path, file, this);
          path.replaceWith(id);
        }
      }
    }
  };
}
