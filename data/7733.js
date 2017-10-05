{
  var type = event.type || "unknown-event";
  event.currentTarget = EventPluginUtils.getNodeFromInstance(inst);
  ReactErrorUtils.invokeGuardedCallbackAndCatchFirstError(
    type,
    listener,
    undefined,
    event
  );
  event.currentTarget = null;
}
