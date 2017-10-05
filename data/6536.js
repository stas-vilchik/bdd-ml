{
  if (handledEventsTable.get(originalEvent)) return;
  handledEventsTable.set(originalEvent, true);
  dispatchEvent(wrap(originalEvent), wrap(originalEvent.target));

  if (pendingError) {
    var err = pendingError;
    pendingError = null;
    throw err;
  }
}
