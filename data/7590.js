{
  ReactControlledComponent.enqueueStateRestore(domNode);
  EventPluginHub.enqueueEvents(event);
  EventPluginHub.processEventQueue(true);
}
