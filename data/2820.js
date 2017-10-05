{
  if (t) {
    for (var x of inorder1(t.left)) {
      yield x;
    }

    yield t.label;

    for (var x of inorder1(t.right)) {
      yield x;
    }
  }
}