{
  var mountAt = contentDocumentHandle;
  var isListening = getListeningForDocument(mountAt);
  var dependencies =
    EventPluginRegistry.registrationNameDependencies[registrationName];

  for (var i = 0; i < dependencies.length; i++) {
    var dependency = dependencies[i];

    if (!(isListening.hasOwnProperty(dependency) && isListening[dependency])) {
      if (dependency === "topWheel") {
        if (isEventSupported("wheel")) {
          ReactDOMEventListener.trapBubbledEvent("topWheel", "wheel", mountAt);
        } else if (isEventSupported("mousewheel")) {
          ReactDOMEventListener.trapBubbledEvent(
            "topWheel",
            "mousewheel",
            mountAt
          );
        } else {
          ReactDOMEventListener.trapBubbledEvent(
            "topWheel",
            "DOMMouseScroll",
            mountAt
          );
        }
      } else if (dependency === "topScroll") {
        ReactDOMEventListener.trapCapturedEvent("topScroll", "scroll", mountAt);
      } else if (dependency === "topFocus" || dependency === "topBlur") {
        ReactDOMEventListener.trapCapturedEvent("topFocus", "focus", mountAt);
        ReactDOMEventListener.trapCapturedEvent("topBlur", "blur", mountAt);
        isListening.topBlur = true;
        isListening.topFocus = true;
      } else if (dependency === "topCancel") {
        if (isEventSupported("cancel", true)) {
          ReactDOMEventListener.trapCapturedEvent(
            "topCancel",
            "cancel",
            mountAt
          );
        }

        isListening.topCancel = true;
      } else if (dependency === "topClose") {
        if (isEventSupported("close", true)) {
          ReactDOMEventListener.trapCapturedEvent("topClose", "close", mountAt);
        }

        isListening.topClose = true;
      } else if (topLevelTypes.hasOwnProperty(dependency)) {
        ReactDOMEventListener.trapBubbledEvent(
          dependency,
          topLevelTypes[dependency],
          mountAt
        );
      }

      isListening[dependency] = true;
    }
  }
}
