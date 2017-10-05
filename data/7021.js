{
  var queue = observer.takeRecords();
  removeTransientObserversFor(observer);

  if (queue.length) {
    observer.callback_(queue, observer);
    anyNonEmpty = true;
  }
}
