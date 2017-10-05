{
  if (observer.scheduled_) return;
  observer.scheduled_ = true;
  globalMutationObservers.push(observer);
  if (isScheduled) return;
  setEndOfMicrotask(notifyObservers);
  isScheduled = true;
}
