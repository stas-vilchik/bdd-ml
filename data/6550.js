{
  var eventPath = eventPathTable.get(this);
  if (!eventPath) return [];
  return eventPath.slice();
}
