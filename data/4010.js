{
  jest.dontMock("../fruit");

  const { apple, strawberry, default: defaultExport } = require("../fruit");

  const defaultExportResult = defaultExport();
  expect(defaultExportResult).toBe("banana");
  expect(apple).toBe("apple");
  expect(strawberry()).toBe("strawberry");
}
