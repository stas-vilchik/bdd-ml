{
  beforeEach(() => {
    jest.resetModules();

    const ReactDOM = require("react-dom");

    const ReactDOMUnstableNativeDependencies = require("react-dom/unstable-native-dependencies");

    EventPluginHub =
      ReactDOM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
        .EventPluginHub;
    const injectComponentTree =
      ReactDOMUnstableNativeDependencies.injectComponentTree;
    ResponderEventPlugin =
      ReactDOMUnstableNativeDependencies.ResponderEventPlugin;
    deleteAllListeners(GRANDPARENT_INST);
    deleteAllListeners(PARENT_INST);
    deleteAllListeners(CHILD_INST);
    deleteAllListeners(CHILD_INST2);
    injectComponentTree({
      getInstanceFromNode,
      getNodeFromInstance
    });
  });
  it("should do nothing when no one wants to respond", () => {
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
      returnVal: false
    };
    config.startShouldSetResponder.bubbled.parent = {
      order: 4,
      returnVal: false
    };
    config.startShouldSetResponder.bubbled.grandParent = {
      order: 5,
      returnVal: false
    };
    run(config, three, startConfig(three.child, [three.child], [0]));
    expect(ResponderEventPlugin._getResponder()).toBe(null);
    config = oneEventLoopTestConfig(three);
    run(config, three, endConfig(three.child, [three.child], [0]));
    expect(ResponderEventPlugin._getResponder()).toBe(null);
  });
  it("should grant responder grandParent while capturing", () => {
    var config = oneEventLoopTestConfig(three);
    config.startShouldSetResponder.captured.grandParent = {
      order: 0,
      returnVal: true
    };
    config.responderGrant.grandParent = {
      order: 1
    };
    config.responderStart.grandParent = {
      order: 2
    };
    run(config, three, startConfig(three.child, [three.child], [0]));
    expect(ResponderEventPlugin._getResponder()).toBe(
      getInstanceFromNode(three.grandParent)
    );
    config = oneEventLoopTestConfig(three);
    config.responderEnd.grandParent = {
      order: 0
    };
    config.responderRelease.grandParent = {
      order: 1
    };
    run(config, three, endConfig(three.child, [three.child], [0]));
    expect(ResponderEventPlugin._getResponder()).toBe(null);
  });
  it("should grant responder parent while capturing", () => {
    var config = oneEventLoopTestConfig(three);
    config.startShouldSetResponder.captured.grandParent = {
      order: 0,
      returnVal: false
    };
    config.startShouldSetResponder.captured.parent = {
      order: 1,
      returnVal: true
    };
    config.responderGrant.parent = {
      order: 2
    };
    config.responderStart.parent = {
      order: 3
    };
    run(config, three, startConfig(three.child, [three.child], [0]));
    expect(ResponderEventPlugin._getResponder()).toBe(
      getInstanceFromNode(three.parent)
    );
    config = oneEventLoopTestConfig(three);
    config.responderEnd.parent = {
      order: 0
    };
    config.responderRelease.parent = {
      order: 1
    };
    run(config, three, endConfig(three.child, [three.child], [0]));
    expect(ResponderEventPlugin._getResponder()).toBe(null);
  });
  it("should grant responder child while capturing", () => {
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
      returnVal: true
    };
    config.responderGrant.child = {
      order: 3
    };
    config.responderStart.child = {
      order: 4
    };
    run(config, three, startConfig(three.child, [three.child], [0]));
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
    run(config, three, endConfig(three.child, [three.child], [0]));
    expect(ResponderEventPlugin._getResponder()).toBe(null);
  });
  it("should grant responder child while bubbling", () => {
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
    config.responderEnd.child = {
      order: 0
    };
    config.responderRelease.child = {
      order: 1
    };
    run(config, three, endConfig(three.child, [three.child], [0]));
    expect(ResponderEventPlugin._getResponder()).toBe(null);
  });
  it("should grant responder parent while bubbling", () => {
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
      returnVal: false
    };
    config.startShouldSetResponder.bubbled.parent = {
      order: 4,
      returnVal: true
    };
    config.responderGrant.parent = {
      order: 5
    };
    config.responderStart.parent = {
      order: 6
    };
    run(config, three, startConfig(three.child, [three.child], [0]));
    expect(ResponderEventPlugin._getResponder()).toBe(
      getInstanceFromNode(three.parent)
    );
    config = oneEventLoopTestConfig(three);
    config.responderEnd.parent = {
      order: 0
    };
    config.responderRelease.parent = {
      order: 1
    };
    run(config, three, endConfig(three.child, [three.child], [0]));
    expect(ResponderEventPlugin._getResponder()).toBe(null);
  });
  it("should grant responder grandParent while bubbling", () => {
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
      returnVal: false
    };
    config.startShouldSetResponder.bubbled.parent = {
      order: 4,
      returnVal: false
    };
    config.startShouldSetResponder.bubbled.grandParent = {
      order: 5,
      returnVal: true
    };
    config.responderGrant.grandParent = {
      order: 6
    };
    config.responderStart.grandParent = {
      order: 7
    };
    run(config, three, startConfig(three.child, [three.child], [0]));
    expect(ResponderEventPlugin._getResponder()).toBe(
      getInstanceFromNode(three.grandParent)
    );
    config = oneEventLoopTestConfig(three);
    config.responderEnd.grandParent = {
      order: 0
    };
    config.responderRelease.grandParent = {
      order: 1
    };
    run(config, three, endConfig(three.child, [three.child], [0]));
    expect(ResponderEventPlugin._getResponder()).toBe(null);
  });
  it("should grant responder grandParent while capturing move", () => {
    var config = oneEventLoopTestConfig(three);
    config.startShouldSetResponder.captured.grandParent = {
      order: 0
    };
    config.startShouldSetResponder.captured.parent = {
      order: 1
    };
    config.startShouldSetResponder.captured.child = {
      order: 2
    };
    config.startShouldSetResponder.bubbled.child = {
      order: 3
    };
    config.startShouldSetResponder.bubbled.parent = {
      order: 4
    };
    config.startShouldSetResponder.bubbled.grandParent = {
      order: 5
    };
    run(config, three, startConfig(three.child, [three.child], [0]));
    config = oneEventLoopTestConfig(three);
    config.moveShouldSetResponder.captured.grandParent = {
      order: 0,
      returnVal: true
    };
    config.responderGrant.grandParent = {
      order: 1
    };
    config.responderMove.grandParent = {
      order: 2
    };
    run(config, three, moveConfig(three.child, [three.child], [0]));
    expect(ResponderEventPlugin._getResponder()).toBe(
      getInstanceFromNode(three.grandParent)
    );
    config = oneEventLoopTestConfig(three);
    config.responderEnd.grandParent = {
      order: 0
    };
    config.responderRelease.grandParent = {
      order: 1
    };
    run(config, three, endConfig(three.child, [three.child], [0]));
    expect(ResponderEventPlugin._getResponder()).toBe(null);
  });
  it("should grant responder parent while capturing move", () => {
    var config = oneEventLoopTestConfig(three);
    config.startShouldSetResponder.captured.grandParent = {
      order: 0
    };
    config.startShouldSetResponder.captured.parent = {
      order: 1
    };
    config.startShouldSetResponder.captured.child = {
      order: 2
    };
    config.startShouldSetResponder.bubbled.child = {
      order: 3
    };
    config.startShouldSetResponder.bubbled.parent = {
      order: 4
    };
    config.startShouldSetResponder.bubbled.grandParent = {
      order: 5
    };
    run(config, three, startConfig(three.child, [three.child], [0]));
    config = oneEventLoopTestConfig(three);
    config.moveShouldSetResponder.captured.grandParent = {
      order: 0,
      returnVal: false
    };
    config.moveShouldSetResponder.captured.parent = {
      order: 1,
      returnVal: true
    };
    config.responderGrant.parent = {
      order: 2
    };
    config.responderMove.parent = {
      order: 3
    };
    run(config, three, moveConfig(three.child, [three.child], [0]));
    expect(ResponderEventPlugin._getResponder()).toBe(
      getInstanceFromNode(three.parent)
    );
    config = oneEventLoopTestConfig(three);
    config.responderEnd.parent = {
      order: 0
    };
    config.responderRelease.parent = {
      order: 1
    };
    run(config, three, endConfig(three.child, [three.child], [0]));
    expect(ResponderEventPlugin._getResponder()).toBe(null);
  });
  it("should grant responder child while capturing move", () => {
    var config = oneEventLoopTestConfig(three);
    config.startShouldSetResponder.captured.grandParent = {
      order: 0
    };
    config.startShouldSetResponder.captured.parent = {
      order: 1
    };
    config.startShouldSetResponder.captured.child = {
      order: 2
    };
    config.startShouldSetResponder.bubbled.child = {
      order: 3
    };
    config.startShouldSetResponder.bubbled.parent = {
      order: 4
    };
    config.startShouldSetResponder.bubbled.grandParent = {
      order: 5
    };
    run(config, three, startConfig(three.child, [three.child], [0]));
    config = oneEventLoopTestConfig(three);
    config.moveShouldSetResponder.captured.grandParent = {
      order: 0,
      returnVal: false
    };
    config.moveShouldSetResponder.captured.parent = {
      order: 1,
      returnVal: false
    };
    config.moveShouldSetResponder.captured.child = {
      order: 2,
      returnVal: true
    };
    config.responderGrant.child = {
      order: 3
    };
    config.responderMove.child = {
      order: 4
    };
    run(config, three, moveConfig(three.child, [three.child], [0]));
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
    run(config, three, endConfig(three.child, [three.child], [0]));
    expect(ResponderEventPlugin._getResponder()).toBe(null);
  });
  it("should grant responder child while bubbling move", () => {
    var config = oneEventLoopTestConfig(three);
    config.startShouldSetResponder.captured.grandParent = {
      order: 0
    };
    config.startShouldSetResponder.captured.parent = {
      order: 1
    };
    config.startShouldSetResponder.captured.child = {
      order: 2
    };
    config.startShouldSetResponder.bubbled.child = {
      order: 3
    };
    config.startShouldSetResponder.bubbled.parent = {
      order: 4
    };
    config.startShouldSetResponder.bubbled.grandParent = {
      order: 5
    };
    run(config, three, startConfig(three.child, [three.child], [0]));
    config = oneEventLoopTestConfig(three);
    config.moveShouldSetResponder.captured.grandParent = {
      order: 0,
      returnVal: false
    };
    config.moveShouldSetResponder.captured.parent = {
      order: 1,
      returnVal: false
    };
    config.moveShouldSetResponder.captured.child = {
      order: 2,
      returnVal: false
    };
    config.moveShouldSetResponder.bubbled.child = {
      order: 3,
      returnVal: true
    };
    config.responderGrant.child = {
      order: 4
    };
    config.responderMove.child = {
      order: 5
    };
    run(config, three, moveConfig(three.child, [three.child], [0]));
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
    run(config, three, endConfig(three.child, [three.child], [0]));
    expect(ResponderEventPlugin._getResponder()).toBe(null);
  });
  it("should grant responder parent while bubbling move", () => {
    var config = oneEventLoopTestConfig(three);
    config.startShouldSetResponder.captured.grandParent = {
      order: 0
    };
    config.startShouldSetResponder.captured.parent = {
      order: 1
    };
    config.startShouldSetResponder.captured.child = {
      order: 2
    };
    config.startShouldSetResponder.bubbled.child = {
      order: 3
    };
    config.startShouldSetResponder.bubbled.parent = {
      order: 4
    };
    config.startShouldSetResponder.bubbled.grandParent = {
      order: 5
    };
    run(config, three, startConfig(three.child, [three.child], [0]));
    config = oneEventLoopTestConfig(three);
    config.moveShouldSetResponder.captured.grandParent = {
      order: 0,
      returnVal: false
    };
    config.moveShouldSetResponder.captured.parent = {
      order: 1,
      returnVal: false
    };
    config.moveShouldSetResponder.captured.child = {
      order: 2,
      returnVal: false
    };
    config.moveShouldSetResponder.bubbled.child = {
      order: 3,
      returnVal: false
    };
    config.moveShouldSetResponder.bubbled.parent = {
      order: 4,
      returnVal: true
    };
    config.responderGrant.parent = {
      order: 5
    };
    config.responderMove.parent = {
      order: 6
    };
    run(config, three, moveConfig(three.child, [three.child], [0]));
    expect(ResponderEventPlugin._getResponder()).toBe(
      getInstanceFromNode(three.parent)
    );
    config = oneEventLoopTestConfig(three);
    config.responderEnd.parent = {
      order: 0
    };
    config.responderRelease.parent = {
      order: 1
    };
    run(config, three, endConfig(three.child, [three.child], [0]));
    expect(ResponderEventPlugin._getResponder()).toBe(null);
  });
  it("should grant responder grandParent while bubbling move", () => {
    var config = oneEventLoopTestConfig(three);
    config.startShouldSetResponder.captured.grandParent = {
      order: 0
    };
    config.startShouldSetResponder.captured.parent = {
      order: 1
    };
    config.startShouldSetResponder.captured.child = {
      order: 2
    };
    config.startShouldSetResponder.bubbled.child = {
      order: 3
    };
    config.startShouldSetResponder.bubbled.parent = {
      order: 4
    };
    config.startShouldSetResponder.bubbled.grandParent = {
      order: 5
    };
    run(config, three, startConfig(three.child, [three.child], [0]));
    config = oneEventLoopTestConfig(three);
    config.moveShouldSetResponder.captured.grandParent = {
      order: 0,
      returnVal: false
    };
    config.moveShouldSetResponder.captured.parent = {
      order: 1,
      returnVal: false
    };
    config.moveShouldSetResponder.captured.child = {
      order: 2,
      returnVal: false
    };
    config.moveShouldSetResponder.bubbled.child = {
      order: 3,
      returnVal: false
    };
    config.moveShouldSetResponder.bubbled.parent = {
      order: 4,
      returnVal: false
    };
    config.moveShouldSetResponder.bubbled.grandParent = {
      order: 5,
      returnVal: true
    };
    config.responderGrant.grandParent = {
      order: 6
    };
    config.responderMove.grandParent = {
      order: 7
    };
    run(config, three, moveConfig(three.child, [three.child], [0]));
    expect(ResponderEventPlugin._getResponder()).toBe(
      getInstanceFromNode(three.grandParent)
    );
    config = oneEventLoopTestConfig(three);
    config.responderEnd.grandParent = {
      order: 0
    };
    config.responderRelease.grandParent = {
      order: 1
    };
    run(config, three, endConfig(three.child, [three.child], [0]));
    expect(ResponderEventPlugin._getResponder()).toBe(null);
  });
  it("should bubble negotiation to first common ancestor of responder", () => {
    var config = oneEventLoopTestConfig(three);
    config.startShouldSetResponder.captured.grandParent = {
      order: 0,
      returnVal: false
    };
    config.startShouldSetResponder.captured.parent = {
      order: 1,
      returnVal: true
    };
    config.responderGrant.parent = {
      order: 2
    };
    config.responderStart.parent = {
      order: 3
    };
    run(config, three, startConfig(three.child, [three.child], [0]));
    expect(ResponderEventPlugin._getResponder()).toBe(
      getInstanceFromNode(three.parent)
    );
    config = oneEventLoopTestConfig(three);
    config.startShouldSetResponder.captured.grandParent = {
      order: 0,
      returnVal: false
    };
    config.startShouldSetResponder.bubbled.grandParent = {
      order: 1,
      returnVal: false
    };
    config.responderStart.parent = {
      order: 2
    };
    run(config, three, startConfig(three.child, [three.child], [0]));
    expect(ResponderEventPlugin._getResponder()).toBe(
      getInstanceFromNode(three.parent)
    );
    config = oneEventLoopTestConfig(three);
    config.responderEnd.parent = {
      order: 0
    };
    config.responderRelease.parent = {
      order: 1
    };
    run(config, three, endConfig(three.child, [three.child], [0]));
    expect(ResponderEventPlugin._getResponder()).toBe(null);
  });
  it("should bubble negotiation to first common ancestor of responder then transfer", () => {
    var config = oneEventLoopTestConfig(three);
    config.startShouldSetResponder.captured.grandParent = {
      order: 0,
      returnVal: false
    };
    config.startShouldSetResponder.captured.parent = {
      order: 1,
      returnVal: true
    };
    config.responderGrant.parent = {
      order: 2
    };
    config.responderStart.parent = {
      order: 3
    };
    run(config, three, startConfig(three.child, [three.child], [0]));
    expect(ResponderEventPlugin._getResponder()).toBe(
      getInstanceFromNode(three.parent)
    );
    config = oneEventLoopTestConfig(three);
    config.startShouldSetResponder.captured.grandParent = {
      order: 0,
      returnVal: true
    };
    config.responderGrant.grandParent = {
      order: 1
    };
    config.responderTerminationRequest.parent = {
      order: 2,
      returnVal: true
    };
    config.responderTerminate.parent = {
      order: 3
    };
    config.responderStart.grandParent = {
      order: 4
    };
    run(
      config,
      three,
      startConfig(three.child, [three.child, three.child], [1])
    );
    expect(ResponderEventPlugin._getResponder()).toBe(
      getInstanceFromNode(three.grandParent)
    );
    config = oneEventLoopTestConfig(three);
    config.responderEnd.grandParent = {
      order: 0
    };
    run(config, three, endConfig(three.child, [three.child, three.child], [1]));
    expect(ResponderEventPlugin._getResponder()).toBe(
      getInstanceFromNode(three.grandParent)
    );
    config = oneEventLoopTestConfig(three);
    config.responderEnd.grandParent = {
      order: 0
    };
    config.responderRelease.grandParent = {
      order: 1
    };
    run(config, three, endConfig(three.child, [three.child], [0]));
    expect(ResponderEventPlugin._getResponder()).toBe(null);
  });
  it("should negotiate with deepest target on second touch if nothing is responder", () => {
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
    run(
      config,
      three,
      endConfig(three.child, [three.parent, three.child], [0])
    );
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
    run(
      config,
      three,
      endConfig(three.child, [three.child, three.parent], [0])
    );
    expect(ResponderEventPlugin._getResponder()).toBe(null);
  });
  it("should negotiate until first common ancestor when there are siblings", () => {
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
  });
  it("should notify of being rejected. responderStart/Move happens on current responder", () => {
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
  });
  it("should negotiate scroll", () => {
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
  });
  it("should cancel correctly", () => {
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
    config.responderEnd.child = {
      order: 0
    };
    config.responderTerminate.child = {
      order: 1
    };

    var nativeEvent = _touchConfig(
      "topTouchCancel",
      three.child,
      [three.child],
      [0]
    );

    run(config, three, nativeEvent);
    expect(ResponderEventPlugin._getResponder()).toBe(null);
  });
}
