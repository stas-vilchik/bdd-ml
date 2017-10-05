{
  return {
    visitor: {
      Function(path) {
        path.scope.rename("a", "z");
      }
    }
  };
}
