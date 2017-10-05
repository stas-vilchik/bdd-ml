{
  if (
    !ExecutionEnvironment.canUseDOM ||
    (capture && !("addEventListener" in document))
  ) {
    return false;
  }

  var eventName = "on" + eventNameSuffix;
  var isSupported = eventName in document;

  if (!isSupported) {
    var element = document.createElement("div");
    element.setAttribute(eventName, "return;");
    isSupported = typeof element[eventName] === "function";
  }

  if (!isSupported && useHasFeature && eventNameSuffix === "wheel") {
    isSupported = document.implementation.hasFeature("Events.wheel", "3.0");
  }

  return isSupported;
}
