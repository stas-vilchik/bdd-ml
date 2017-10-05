{
  var EventConstructor = this;
  invariant(
    event instanceof EventConstructor,
    "Trying to release an event instance  into a pool of a different type."
  );
  event.destructor();

  if (EventConstructor.eventPool.length < EVENT_POOL_SIZE) {
    EventConstructor.eventPool.push(event);
  }
}
