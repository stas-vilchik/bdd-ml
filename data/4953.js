{
  it("forwards the function name property", () => {
    function foo() {}

    const mock = moduleMocker.generateFromMetadata(
      moduleMocker.getMetadata(foo)
    );
    expect(mock.name).toBe("foo");
  });
  it("escapes illegal characters in function name property", () => {
    function getMockFnWithOriginalName(name) {
      const fn = () => {};

      Object.defineProperty(fn, "name", {
        value: name
      });
      return moduleMocker.generateFromMetadata(moduleMocker.getMetadata(fn));
    }

    expect(
      getMockFnWithOriginalName("foo-bar").name === "foo$bar"
    ).toBeTruthy();
    expect(
      getMockFnWithOriginalName("foo-bar-2").name === "foo$bar$2"
    ).toBeTruthy();
    expect(
      getMockFnWithOriginalName("foo-bar-3").name === "foo$bar$3"
    ).toBeTruthy();
    expect(
      getMockFnWithOriginalName("foo/bar").name === "foo$bar"
    ).toBeTruthy();
    expect(
      getMockFnWithOriginalName("foo𠮷bar").name === "foo𠮷bar"
    ).toBeTruthy();
  });
  it("special cases the mockConstructor name", () => {
    function mockConstructor() {}

    const mock = moduleMocker.generateFromMetadata(
      moduleMocker.getMetadata(mockConstructor)
    );
    expect(!mock.name || mock.name === "mockConstructor").toBeTruthy();
  });
  it("wont interfere with previous mocks on a shared prototype", () => {
    const ClassFoo = function() {};

    ClassFoo.prototype.x = () => {};

    const ClassFooMock = moduleMocker.generateFromMetadata(
      moduleMocker.getMetadata(ClassFoo)
    );
    const foo = new ClassFooMock();
    const bar = new ClassFooMock();
    foo.x.mockImplementation(() => {
      return "Foo";
    });
    bar.x.mockImplementation(() => {
      return "Bar";
    });
    expect(foo.x()).toBe("Foo");
    expect(bar.x()).toBe("Bar");
  });
  it("does not mock non-enumerable getters", () => {
    const foo = Object.defineProperties(
      {},
      {
        nonEnumGetter: {
          get: () => {
            throw new Error();
          }
        },
        nonEnumMethod: {
          value: () => {}
        }
      }
    );
    const mock = moduleMocker.generateFromMetadata(
      moduleMocker.getMetadata(foo)
    );
    expect(typeof foo.nonEnumMethod).toBe("function");
    expect(mock.nonEnumMethod.mock).not.toBeUndefined();
    expect(mock.nonEnumGetter).toBeUndefined();
  });
  it("mocks getters of ES modules", () => {
    const foo = Object.defineProperties(
      {},
      {
        __esModule: {
          value: true
        },
        enumGetter: {
          enumerable: true,
          get: () => 10
        }
      }
    );
    const mock = moduleMocker.generateFromMetadata(
      moduleMocker.getMetadata(foo)
    );
    expect(mock.enumGetter).toBeDefined();
  });
  it("mocks ES2015 non-enumerable methods", () => {
    class ClassFoo {
      foo() {}

      toString() {
        return "Foo";
      }
    }

    const ClassFooMock = moduleMocker.generateFromMetadata(
      moduleMocker.getMetadata(ClassFoo)
    );
    const foo = new ClassFooMock();
    const instanceFoo = new ClassFoo();
    const instanceFooMock = moduleMocker.generateFromMetadata(
      moduleMocker.getMetadata(instanceFoo)
    );
    expect(typeof foo.foo).toBe("function");
    expect(typeof instanceFooMock.foo).toBe("function");
    expect(instanceFooMock.foo.mock).not.toBeUndefined();
    expect(instanceFooMock.toString.mock).not.toBeUndefined();
  });
  it("mocks methods that are bound multiple times", () => {
    const func = function func() {};

    const multipleBoundFunc = func.bind(null).bind(null);
    const multipleBoundFuncMock = moduleMocker.generateFromMetadata(
      moduleMocker.getMetadata(multipleBoundFunc)
    );
    expect(typeof multipleBoundFuncMock).toBe("function");
  });
  it("mocks methods that are bound after mocking", () => {
    const fooMock = moduleMocker.generateFromMetadata(
      moduleMocker.getMetadata(() => {})
    );
    const barMock = moduleMocker.generateFromMetadata(
      moduleMocker.getMetadata(fooMock.bind(null))
    );
    expect(barMock).not.toThrow();
  });
  it("mocks regexp instances", () => {
    expect(() =>
      moduleMocker.generateFromMetadata(moduleMocker.getMetadata(/a/))
    ).not.toThrow();
  });
  describe("mocked functions", () => {
    it("tracks calls to mocks", () => {
      const fn = moduleMocker.fn();
      expect(fn.mock.calls).toEqual([]);
      fn(1, 2, 3);
      expect(fn.mock.calls).toEqual([[1, 2, 3]]);
      fn("a", "b", "c");
      expect(fn.mock.calls).toEqual([[1, 2, 3], ["a", "b", "c"]]);
    });
    it("tracks instances made by mocks", () => {
      const fn = moduleMocker.fn();
      expect(fn.mock.instances).toEqual([]);
      const instance1 = new fn();
      expect(fn.mock.instances[0]).toBe(instance1);
      const instance2 = new fn();
      expect(fn.mock.instances[1]).toBe(instance2);
    });
    it("supports clearing mock calls", () => {
      const fn = moduleMocker.fn();
      expect(fn.mock.calls).toEqual([]);
      fn(1, 2, 3);
      expect(fn.mock.calls).toEqual([[1, 2, 3]]);
      fn.mockReturnValue("abcd");
      fn.mockClear();
      expect(fn.mock.calls).toEqual([]);
      fn("a", "b", "c");
      expect(fn.mock.calls).toEqual([["a", "b", "c"]]);
      expect(fn()).toEqual("abcd");
    });
    it("supports clearing mocks", () => {
      const fn = moduleMocker.fn();
      expect(fn.mock.calls).toEqual([]);
      fn(1, 2, 3);
      expect(fn.mock.calls).toEqual([[1, 2, 3]]);
      fn.mockClear();
      expect(fn.mock.calls).toEqual([]);
      fn("a", "b", "c");
      expect(fn.mock.calls).toEqual([["a", "b", "c"]]);
    });
    it("supports clearing all mocks", () => {
      const fn1 = moduleMocker.fn();
      fn1.mockImplementation(() => "abcd");
      fn1(1, 2, 3);
      expect(fn1.mock.calls).toEqual([[1, 2, 3]]);
      const fn2 = moduleMocker.fn();
      fn2.mockReturnValue("abcde");
      fn2("a", "b", "c", "d");
      expect(fn2.mock.calls).toEqual([["a", "b", "c", "d"]]);
      moduleMocker.clearAllMocks();
      expect(fn1.mock.calls).toEqual([]);
      expect(fn2.mock.calls).toEqual([]);
      expect(fn1()).toEqual("abcd");
      expect(fn2()).toEqual("abcde");
    });
    it("supports resetting mock return values", () => {
      const fn = moduleMocker.fn();
      fn.mockReturnValue("abcd");
      const before = fn();
      expect(before).toEqual("abcd");
      fn.mockReset();
      const after = fn();
      expect(after).not.toEqual("abcd");
    });
    it("supports resetting single use mock return values", () => {
      const fn = moduleMocker.fn();
      fn.mockReturnValueOnce("abcd");
      fn.mockReset();
      const after = fn();
      expect(after).not.toEqual("abcd");
    });
    it("supports resetting mock implementations", () => {
      const fn = moduleMocker.fn();
      fn.mockImplementation(() => "abcd");
      const before = fn();
      expect(before).toEqual("abcd");
      fn.mockReset();
      const after = fn();
      expect(after).not.toEqual("abcd");
    });
    it("supports resetting single use mock implementations", () => {
      const fn = moduleMocker.fn();
      fn.mockImplementationOnce(() => "abcd");
      fn.mockReset();
      const after = fn();
      expect(after).not.toEqual("abcd");
    });
    it("supports resetting all mocks", () => {
      const fn1 = moduleMocker.fn();
      fn1.mockImplementation(() => "abcd");
      fn1(1, 2, 3);
      expect(fn1.mock.calls).toEqual([[1, 2, 3]]);
      const fn2 = moduleMocker.fn();
      fn2.mockReturnValue("abcd");
      fn2("a", "b", "c");
      expect(fn2.mock.calls).toEqual([["a", "b", "c"]]);
      moduleMocker.resetAllMocks();
      expect(fn1.mock.calls).toEqual([]);
      expect(fn2.mock.calls).toEqual([]);
      expect(fn1()).not.toEqual("abcd");
      expect(fn2()).not.toEqual("abcd");
    });
    it("maintains function arity", () => {
      const mockFunctionArity1 = moduleMocker.fn(x => x);
      const mockFunctionArity2 = moduleMocker.fn((x, y) => y);
      expect(mockFunctionArity1.length).toBe(1);
      expect(mockFunctionArity2.length).toBe(2);
    });
  });
  it("supports mock value returning undefined", () => {
    const obj = {
      func: () => "some text"
    };
    moduleMocker.spyOn(obj, "func").mockReturnValue(undefined);
    expect(obj.func()).not.toEqual("some text");
  });
  it("supports mock value once returning undefined", () => {
    const obj = {
      func: () => "some text"
    };
    moduleMocker.spyOn(obj, "func").mockReturnValueOnce(undefined);
    expect(obj.func()).not.toEqual("some text");
  });
  it("mockReturnValueOnce mocks value just once", () => {
    const fake = jest.fn(a => a + 2);
    fake.mockReturnValueOnce(42);
    expect(fake(2)).toEqual(42);
    expect(fake(2)).toEqual(4);
  });
}
