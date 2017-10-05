{
  var internalInstance = EventPluginUtils.getInstanceFromNode(target);

  if (!internalInstance) {
    return;
  }

  if (typeof internalInstance.tag === "number") {
    invariant(
      fiberHostComponent &&
        typeof fiberHostComponent.restoreControlledState === "function",
      "Fiber needs to be injected to handle a fiber target for controlled " +
        "events. This error is likely caused by a bug in React. Please file an issue."
    );
    const props = EventPluginUtils.getFiberCurrentPropsFromNode(
      internalInstance.stateNode
    );
    fiberHostComponent.restoreControlledState(
      internalInstance.stateNode,
      internalInstance.type,
      props
    );
    return;
  }

  invariant(
    typeof internalInstance.restoreControlledState === "function",
    "The internal instance must be a React host component. " +
      "This error is likely caused by a bug in React. Please file an issue."
  );
  internalInstance.restoreControlledState();
}
