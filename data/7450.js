{
  var createEvent;
  beforeEach(() => {
    SyntheticWheelEvent = require("SyntheticWheelEvent");

    createEvent = function(nativeEvent) {
      var target = require("getEventTarget")(nativeEvent);

      return SyntheticWheelEvent.getPooled({}, "", nativeEvent, target);
    };
  });
  it("should normalize properties from the Event interface", () => {
    var target = document.createElement("div");
    var syntheticEvent = createEvent({
      srcElement: target
    });
    expect(syntheticEvent.target).toBe(target);
    expect(syntheticEvent.type).toBe(undefined);
  });
  it("should normalize properties from the MouseEvent interface", () => {
    expect(
      createEvent({
        which: 2,
        button: 1
      }).button
    ).toBe(1);
  });
  it("should normalize properties from the WheelEvent interface", () => {
    var standardEvent = createEvent({
      deltaX: 10,
      deltaY: -50
    });
    expect(standardEvent.deltaX).toBe(10);
    expect(standardEvent.deltaY).toBe(-50);
    var webkitEvent = createEvent({
      wheelDeltaX: -10,
      wheelDeltaY: 50
    });
    expect(webkitEvent.deltaX).toBe(10);
    expect(webkitEvent.deltaY).toBe(-50);
  });
  it("should be able to `preventDefault` and `stopPropagation`", () => {
    var nativeEvent = {};
    var syntheticEvent = createEvent(nativeEvent);
    expect(syntheticEvent.isDefaultPrevented()).toBe(false);
    syntheticEvent.preventDefault();
    expect(syntheticEvent.isDefaultPrevented()).toBe(true);
    expect(syntheticEvent.isPropagationStopped()).toBe(false);
    syntheticEvent.stopPropagation();
    expect(syntheticEvent.isPropagationStopped()).toBe(true);
  });
  it("should be able to `persist`", () => {
    var syntheticEvent = createEvent({});
    expect(syntheticEvent.isPersistent()).toBe(false);
    syntheticEvent.persist();
    expect(syntheticEvent.isPersistent()).toBe(true);
  });
}
