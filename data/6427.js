{
  const parentInfo = views.get(parent);
  const childInfo = views.get(child);
  const index = parentInfo.children.indexOf(child);
  invariant(index >= 0, "Missing view %s during removal", child);
  parentInfo.children.splice(index, 1);
  childInfo.parent = null;
}
