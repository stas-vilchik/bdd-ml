{
  var dispatchListeners = event._dispatchListeners;
  var dispatchInstances = event._dispatchInstances;
  var listenersIsArr = Array.isArray(dispatchListeners);
  var listenersLen = listenersIsArr
    ? dispatchListeners.length
    : dispatchListeners ? 1 : 0;
  var instancesIsArr = Array.isArray(dispatchInstances);
  var instancesLen = instancesIsArr
    ? dispatchInstances.length
    : dispatchInstances ? 1 : 0;
  warning(
    instancesIsArr === listenersIsArr && instancesLen === listenersLen,
    "EventPluginUtils: Invalid `event`."
  );
}
