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
  config.startShouldSetResponder.bubbled.parent = {
    order: 2,
    returnVal: false
  };
  config.startShouldSetResponder.bubbled.grandParent = {
    order: 3,
    returnVal: false
  };
  run(config, three, startConfig(three.parent, [three.parent], [0]));
  expect(ResponderEventPlugin._getResponder()).toBe(null);
  config = oneEventLoopTestConfig(three);
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
  run(
    config,
    three,
    startConfig(three.child, [three.parent, three.child], [1])
  );
  expect(ResponderEventPlugin._getResponder()).toBe(
    getInstanceFromNode(three.child)
  );
  config = oneEventLoopTestConfig(three);
  config.responderEnd.child = {
    order: 0
  };
  run(config, three, endConfig(three.child, [three.parent, three.child], [0]));
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
    returnVal: false
  };
  config.startShouldSetResponder.bubbled.grandParent = {
    order: 3,
    returnVal: false
  };
  config.responderStart.child = {
    order: 4
  };
  run(
    config,
    three,
    startConfig(three.parent, [three.child, three.parent], [1])
  );
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
    returnVal: false
  };
  config.moveShouldSetResponder.bubbled.grandParent = {
    order: 3,
    returnVal: false
  };
  config.responderMove.child = {
    order: 4
  };
  run(
    config,
    three,
    moveConfig(three.parent, [three.child, three.parent], [1])
  );
  expect(ResponderEventPlugin._getResponder()).toBe(
    getInstanceFromNode(three.child)
  );
  config = oneEventLoopTestConfig(three);
  config.responderEnd.child = {
    order: 0
  };
  config.responderRelease.child = {
    order: 1
  };
  run(config, three, endConfig(three.child, [three.child, three.parent], [0]));
  expect(ResponderEventPlugin._getResponder()).toBe(null);
}
