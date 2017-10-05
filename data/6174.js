{
  if (!localState.prodInvariantIdentifier) {
    localState.prodInvariantIdentifier = path.scope.generateUidIdentifier(
      "prodInvariant"
    );
    path.scope.getProgramParent().push({
      id: localState.prodInvariantIdentifier,
      init: t.callExpression(t.identifier("require"), [
        t.stringLiteral("reactProdInvariant")
      ])
    });
  }

  return localState.prodInvariantIdentifier;
}
