{
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
