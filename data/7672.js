{
  var processingEventQueue = eventQueue;
  eventQueue = null;

  if (simulated) {
    forEachAccumulated(
      processingEventQueue,
      executeDispatchesAndReleaseSimulated
    );
  } else {
    forEachAccumulated(
      processingEventQueue,
      executeDispatchesAndReleaseTopLevel
    );
  }

  invariant(
    !eventQueue,
    "processEventQueue(): Additional events were enqueued while processing " +
      "an event queue. Support for this has not yet been implemented."
  );
  ReactErrorUtils.rethrowCaughtError();
}
