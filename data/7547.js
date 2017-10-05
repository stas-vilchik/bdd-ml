{
  if (!instance) {
    return [];
  }

  var stack = [];

  do {
    stack.push(instance);
  } while ((instance = instance._currentElement._owner));

  stack.reverse();
  return stack;
}
