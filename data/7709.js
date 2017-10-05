{
  var config = oneEventLoopTestConfig(siblings);
  config.startShouldSetResponder.captured.parent = {
    order: 0,
    returnVal: false
  };
  config.startShouldSetResponder.captured.childOne = {
    order: 1,
    returnVal: false
  };
  config.startShouldSetResponder.bubbled.childOne = {
    order: 2,
    returnVal: true
  };
  config.responderGrant.childOne = {
    order: 3
  };
  config.responderStart.childOne = {
    order: 4
  };
  run(
    config,
    siblings,
    startConfig(siblings.childOne, [siblings.childOne], [0])
  );
  expect(ResponderEventPlugin._getResponder()).toBe(
    getInstanceFromNode(siblings.childOne)
  );
  config = oneEventLoopTestConfig(siblings);
  config.startShouldSetResponder.captured.parent = {
    order: 0,
    returnVal: false
  };
  config.startShouldSetResponder.bubbled.parent = {
    order: 1,
    returnVal: false
  };
  config.responderStart.childOne = {
    order: 2
  };
  var touchConfig = startConfig(
    siblings.childTwo,
    [siblings.childOne, siblings.childTwo],
    [1]
  );
  run(config, siblings, touchConfig);
  expect(ResponderEventPlugin._getResponder()).toBe(
    getInstanceFromNode(siblings.childOne)
  );
  config = oneEventLoopTestConfig(siblings);
  config.moveShouldSetResponder.captured.parent = {
    order: 0,
    returnVal: false
  };
  config.moveShouldSetResponder.bubbled.parent = {
    order: 1,
    returnVal: false
  };
  config.responderMove.childOne = {
    order: 2
  };
  run(
    config,
    siblings,
    moveConfig(siblings.childOne, [siblings.childOne, siblings.childTwo], [0])
  );
  expect(ResponderEventPlugin._getResponder()).toBe(
    getInstanceFromNode(siblings.childOne)
  );
  config = oneEventLoopTestConfig(siblings);
  config.moveShouldSetResponder.captured.parent = {
    order: 0,
    returnVal: false
  };
  config.moveShouldSetResponder.bubbled.parent = {
    order: 1,
    returnVal: false
  };
  config.responderMove.childOne = {
    order: 2
  };
  run(
    config,
    siblings,
    moveConfig(siblings.childTwo, [siblings.childOne, siblings.childTwo], [1])
  );
  expect(ResponderEventPlugin._getResponder()).toBe(
    getInstanceFromNode(siblings.childOne)
  );
}
