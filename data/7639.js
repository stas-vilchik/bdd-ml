{
  var handler1 = jasmine.createSpy("spy");
  var handler2 = jasmine.createSpy("spy");
  var hook1 = {
    onTestEvent: handler1
  };
  var hook2 = {
    onTestEvent: handler2
  };
  ReactDebugTool.addHook(hook1);
  ReactDebugTool.onTestEvent();
  expect(handler1.calls.count()).toBe(1);
  expect(handler2.calls.count()).toBe(0);
  ReactDebugTool.onTestEvent();
  expect(handler1.calls.count()).toBe(2);
  expect(handler2.calls.count()).toBe(0);
  ReactDebugTool.addHook(hook2);
  ReactDebugTool.onTestEvent();
  expect(handler1.calls.count()).toBe(3);
  expect(handler2.calls.count()).toBe(1);
  ReactDebugTool.onTestEvent();
  expect(handler1.calls.count()).toBe(4);
  expect(handler2.calls.count()).toBe(2);
  ReactDebugTool.removeHook(hook1);
  ReactDebugTool.onTestEvent();
  expect(handler1.calls.count()).toBe(4);
  expect(handler2.calls.count()).toBe(3);
  ReactDebugTool.removeHook(hook2);
  ReactDebugTool.onTestEvent();
  expect(handler1.calls.count()).toBe(4);
  expect(handler2.calls.count()).toBe(3);
}
