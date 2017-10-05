{
  if (scope.upgrade(node)) {
    return true;
  }

  attached(node);
}
