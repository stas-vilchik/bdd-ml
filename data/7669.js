{
  var listener;

  if (typeof inst.tag === "number") {
    const stateNode = inst.stateNode;

    if (!stateNode) {
      return null;
    }

    const props = EventPluginUtils.getFiberCurrentPropsFromNode(stateNode);

    if (!props) {
      return null;
    }

    listener = props[registrationName];

    if (shouldPreventMouseEvent(registrationName, inst.type, props)) {
      return null;
    }
  } else {
    const currentElement = inst._currentElement;

    if (
      typeof currentElement === "string" ||
      typeof currentElement === "number"
    ) {
      return null;
    }

    if (!inst._rootNodeID) {
      return null;
    }

    const props = currentElement.props;
    listener = props[registrationName];

    if (shouldPreventMouseEvent(registrationName, currentElement.type, props)) {
      return null;
    }
  }

  invariant(
    !listener || typeof listener === "function",
    "Expected `%s` listener to be a function, instead got a value of `%s` type.",
    registrationName,
    typeof listener
  );
  return listener;
}
