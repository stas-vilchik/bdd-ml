{
  var relatedTarget = relatedTargetTable.get(this);
  if (relatedTarget !== undefined) return relatedTarget;
  return wrap(unwrap(this).relatedTarget);
}
