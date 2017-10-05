{
  if (innerScope) {
    assert(
      Object.keys(path.scope.bindings).length === 0,
      "Inner scope should not have any bindings"
    );
    innerScope = false;
    return;
  }

  assert(
    Object.keys(path.scope.bindings).length === 2,
    "Outer scope subsume the inner-scope binding"
  );
}
