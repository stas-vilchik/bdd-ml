{
  it("should work", () => {
    let isOriginalCalled = false;
    let originalCallThis;
    let originalCallArguments;
    const obj = {
      method() {
        isOriginalCalled = true;
        originalCallThis = this;
        originalCallArguments = arguments;
      }
    };
    const spy = moduleMocker.spyOn(obj, "method");
    const thisArg = {
      this: true
    };
    const firstArg = {
      first: true
    };
    const secondArg = {
      second: true
    };
    obj.method.call(thisArg, firstArg, secondArg);
    expect(isOriginalCalled).toBe(true);
    expect(originalCallThis).toBe(thisArg);
    expect(originalCallArguments.length).toBe(2);
    expect(originalCallArguments[0]).toBe(firstArg);
    expect(originalCallArguments[1]).toBe(secondArg);
    expect(spy).toHaveBeenCalled();
    isOriginalCalled = false;
    originalCallThis = null;
    originalCallArguments = null;
    spy.mockReset();
    spy.mockRestore();
    obj.method.call(thisArg, firstArg, secondArg);
    expect(isOriginalCalled).toBe(true);
    expect(originalCallThis).toBe(thisArg);
    expect(originalCallArguments.length).toBe(2);
    expect(originalCallArguments[0]).toBe(firstArg);
    expect(originalCallArguments[1]).toBe(secondArg);
    expect(spy).not.toHaveBeenCalled();
  });
  it("should throw on invalid input", () => {
    expect(() => {
      moduleMocker.spyOn(null, "method");
    }).toThrow();
    expect(() => {
      moduleMocker.spyOn({}, "method");
    }).toThrow();
    expect(() => {
      moduleMocker.spyOn(
        {
          method: 10
        },
        "method"
      );
    }).toThrow();
  });
  it("supports restoring all spies", () => {
    let methodOneCalls = 0;
    let methodTwoCalls = 0;
    const obj = {
      methodOne() {
        methodOneCalls++;
      },

      methodTwo() {
        methodTwoCalls++;
      }
    };
    const spy1 = moduleMocker.spyOn(obj, "methodOne");
    const spy2 = moduleMocker.spyOn(obj, "methodTwo");
    obj.methodOne();
    obj.methodTwo();
    expect(methodOneCalls).toBe(1);
    expect(methodTwoCalls).toBe(1);
    expect(spy1.mock.calls.length).toBe(1);
    expect(spy2.mock.calls.length).toBe(1);
    moduleMocker.restoreAllMocks();
    obj.methodOne();
    obj.methodTwo();
    expect(methodOneCalls).toBe(2);
    expect(methodTwoCalls).toBe(2);
    expect(spy1.mock.calls.length).toBe(1);
    expect(spy2.mock.calls.length).toBe(1);
  });
}
