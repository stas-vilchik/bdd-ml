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
  config.moveShouldSetResponder.captured.grandParent = {
    order: 0,
    returnVal: false
  };
  config.moveShouldSetResponder.captured.parent = {
    order: 1,
    returnVal: false
  };
  config.moveShouldSetResponder.bubbled.parent = {
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
  config.responderMove.child = {
    order: 6
  };
  var touchConfig = moveConfig(three.child, [three.child], [0]);
  run(config, three, touchConfig);
  expect(ResponderEventPlugin._getResponder()).toBe(
    getInstanceFromNode(three.child)
  );
  config = oneEventLoopTestConfig(three);
  config.startShouldSetResponder.captured.grandParent = {
    order: 0,
    returnVal: false
  };
  config.startShouldSetResponder.captured.parent = {
    order: 1,
    returnVal: false
  };
  config.startShouldSetResponder.bubbled.parent = {
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
  config.responderStart.child = {
    order: 6
  };
  touchConfig = startConfig(three.child, [three.child, three.child], [1]);
  run(config, three, touchConfig);
  expect(ResponderEventPlugin._getResponder()).toBe(
    getInstanceFromNode(three.child)
  );
}
