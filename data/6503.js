{
  isScheduled = false;

  while (globalMutationObservers.length) {
    var notifyList = globalMutationObservers;
    globalMutationObservers = [];
    notifyList.sort(function(x, y) {
      return x.uid_ - y.uid_;
    });

    for (var i = 0; i < notifyList.length; i++) {
      var mo = notifyList[i];
      mo.scheduled_ = false;
      var queue = mo.takeRecords();
      removeTransientObserversFor(mo);

      if (queue.length) {
        mo.callback_(queue, mo);
      }
    }
  }
}
