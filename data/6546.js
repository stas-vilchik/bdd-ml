{
  if (type instanceof OriginalEvent) {
    var impl = type;

    if (
      !OriginalBeforeUnloadEvent &&
      impl.type === "beforeunload" &&
      !(this instanceof BeforeUnloadEvent)
    ) {
      return new BeforeUnloadEvent(impl);
    }

    setWrapper(impl, this);
  } else {
    return wrap(constructEvent(OriginalEvent, "Event", type, options));
  }
}
