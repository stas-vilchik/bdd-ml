{
  var config = oneEventLoopTestConfig(three);
  config.startShouldSetResponder.captured.grandParent = {
    order: 0,
    returnVal: false
  };
  config.startShouldSetResponder.captured.parent = {
    order: 1,
    returnVal: false
  };
  config.startShouldSetResponder.captured.child = {
    order: 2,
    returnVal: false
  };
  config.startShouldSetResponder.bubbled.child = {
    order: 3,
    returnVal: true
  };
  config.responderGrant.child = {
    order: 4
  };
  config.responderStart.child = {
    order: 5
  };
  run(config, three, startConfig(three.child, [three.child], [0]));
  expect(ResponderEventPlugin._getResponder()).toBe(
    getInstanceFromNode(three.child)
  );
  config = oneEventLoopTestConfig(three);
  config.scrollShouldSetResponder.captured.grandParent = {
    order: 0,
    returnVal: false
  };
  config.scrollShouldSetResponder.captured.parent = {
    order: 1,
    returnVal: false
  };
  config.scrollShouldSetResponder.bubbled.parent = {
    order: 2,
    returnVal: true
  };
  config.responderGrant.parent = {
    order: 3
  };
  config.responderTerminationRequest.child = {
    order: 4,
    returnVal: false
  };
  config.responderReject.parent = {
    order: 5
  };
  run(config, three, {
    topLevelType: "topScroll",
    targetInst: getInstanceFromNode(three.parent),
    nativeEvent: {}
  });
  expect(ResponderEventPlugin._getResponder()).toBe(
    getInstanceFromNode(three.child)
  );
  config = oneEventLoopTestConfig(three);
  config.scrollShouldSetResponder.captured.grandParent = {
    order: 0,
    returnVal: false
  };
  config.scrollShouldSetResponder.captured.parent = {
    order: 1,
    returnVal: false
  };
  config.scrollShouldSetResponder.bubbled.parent = {
    order: 2,
    returnVal: true
  };
  config.responderGrant.parent = {
    order: 3
  };
  config.responderTerminationRequest.child = {
    order: 4,
    returnVal: true
  };
  config.responderTerminate.child = {
    order: 5
  };
  run(config, three, {
    topLevelType: "topScroll",
    targetInst: getInstanceFromNode(three.parent),
    nativeEvent: {}
  });
  expect(ResponderEventPlugin._getResponder()).toBe(
    getInstanceFromNode(three.parent)
  );
}
