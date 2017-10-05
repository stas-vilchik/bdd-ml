{
  markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
  return tree;
}
