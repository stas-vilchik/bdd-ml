{
  scheduledObservers.push(observer);

  if (!isScheduled) {
    isScheduled = true;
    setImmediate(dispatchCallbacks);
  }
}
