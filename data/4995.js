{
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
}
