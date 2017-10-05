{
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
}
