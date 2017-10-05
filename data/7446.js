{
  it("normalizes properties from the Event interface", () => {
    var target = document.createElement("div");
    var syntheticEvent = createEvent({
      srcElement: target
    });
    expect(syntheticEvent.target).toBe(target);
    expect(syntheticEvent.type).toBe(undefined);
  });
  it("is able to `preventDefault` and `stopPropagation`", () => {
    var nativeEvent = {};
    var syntheticEvent = createEvent(nativeEvent);
    expect(syntheticEvent.isDefaultPrevented()).toBe(false);
    syntheticEvent.preventDefault();
    expect(syntheticEvent.isDefaultPrevented()).toBe(true);
    expect(syntheticEvent.isPropagationStopped()).toBe(false);
    syntheticEvent.stopPropagation();
    expect(syntheticEvent.isPropagationStopped()).toBe(true);
  });
  it("is able to `persist`", () => {
    var syntheticEvent = createEvent({});
    expect(syntheticEvent.isPersistent()).toBe(false);
    syntheticEvent.persist();
    expect(syntheticEvent.isPersistent()).toBe(true);
  });
}
