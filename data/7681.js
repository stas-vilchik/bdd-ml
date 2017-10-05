{
  var ret = {
    scrollShouldSetResponder: {
      bubbled: {},
      captured: {}
    },
    startShouldSetResponder: {
      bubbled: {},
      captured: {}
    },
    moveShouldSetResponder: {
      bubbled: {},
      captured: {}
    },
    responderTerminationRequest: {},
    responderReject: {},
    responderGrant: {},
    responderStart: {},
    responderMove: {},
    responderTerminate: {},
    responderEnd: {},
    responderRelease: {}
  };

  for (var eventName in ret) {
    for (var readableNodeName in readableIDToID) {
      if (ret[eventName].bubbled) {
        ret[eventName].bubbled[readableNodeName] = {
          order: NA,
          assertEvent: null,
          returnVal: undefined
        };
        ret[eventName].captured[readableNodeName] = {
          order: NA,
          assertEvent: null,
          returnVal: undefined
        };
      } else {
        ret[eventName][readableNodeName] = {
          order: NA,
          assertEvent: null,
          returnVal: undefined
        };
      }
    }
  }

  return ret;
}
