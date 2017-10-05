{
  var event = createAndAccumulateChangeEvent(
    activeElementInst,
    nativeEvent,
    getEventTarget(nativeEvent)
  );
  ReactGenericBatching.batchedUpdates(runEventInBatch, event);
}
