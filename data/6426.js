{
  const parentInfo = views.get(parent);
  const childInfo = views.get(child);
  invariant(
    childInfo.parent === null,
    "Inserting view %s %s which already has parent",
    child,
    JSON.stringify(childInfo.props)
  );
  invariant(
    0 <= index && index <= parentInfo.children.length,
    "Invalid index %s for children %s",
    index,
    parentInfo.children
  );
  parentInfo.children.splice(index, 0, child);
  childInfo.parent = parent;
}
