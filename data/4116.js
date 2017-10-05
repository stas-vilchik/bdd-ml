{
  expect(() => require("v8")).not.toThrow();
  expect(require("v8").getHeapStatistics().total_heap_size).toBeDefined();
}
