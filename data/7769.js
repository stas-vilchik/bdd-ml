{
  var warningCondition = false;
  warning(
    warningCondition,
    "This synthetic event is reused for performance reasons. If you're seeing this, " +
      "you're %s `%s` on a released/nullified synthetic event. %s. " +
      "If you must keep the original synthetic event around, use event.persist(). " +
      "See https://fb.me/react-event-pooling for more information.",
    action,
    propName,
    result
  );
}
