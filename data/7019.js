{
  isScheduled = false;
  var observers = scheduledObservers;
  scheduledObservers = [];
  observers.sort(function(o1, o2) {
    return o1.uid_ - o2.uid_;
  });
  var anyNonEmpty = false;
  observers.forEach(function(observer) {
    var queue = observer.takeRecords();
    removeTransientObserversFor(observer);

    if (queue.length) {
      observer.callback_(queue, observer);
      anyNonEmpty = true;
    }
  });
  if (anyNonEmpty) dispatchCallbacks();
}
