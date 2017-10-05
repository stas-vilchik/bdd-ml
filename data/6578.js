{
  var inlineEventHandlers = eventHandlersTable.get(this);
  return (
    (inlineEventHandlers &&
      inlineEventHandlers[name] &&
      inlineEventHandlers[name].value) ||
    null
  );
}
