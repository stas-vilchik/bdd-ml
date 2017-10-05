{
  var createEvent;
  beforeEach(() => {
    SyntheticClipboardEvent = require("SyntheticClipboardEvent");

    createEvent = function(nativeEvent) {
      var target = require("getEventTarget")(nativeEvent);

      return SyntheticClipboardEvent.getPooled({}, "", nativeEvent, target);
    };
  });
  describe("ClipboardEvent interface", () => {
    describe("clipboardData", () => {
      describe("when event has clipboardData", () => {
        it("returns event's clipboardData", () => {
          var clipboardData = {
            dropEffect: null,
            effectAllowed: null,
            files: null,
            items: null,
            types: null
          };
          var clipboardEvent = createEvent({
            clipboardData: clipboardData
          });
          expect(clipboardEvent.clipboardData).toBe(clipboardData);
        });
      });
    });
  });
  describe("EventInterface", () => {
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
  });
}
