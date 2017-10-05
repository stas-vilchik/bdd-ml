{
  jest.doMock("../fruit", () => ({
    apple: "mocked apple",
    default: jest.fn(() => "mocked fruit"),
    strawberry: jest.fn(() => "mocked strawberry")
  }));

  const { apple, strawberry, default: defaultExport } = require("../fruit");

  const defaultExportResult = defaultExport();
  expect(defaultExportResult).toBe("mocked fruit");
  expect(defaultExport).toHaveBeenCalled();
  expect(apple).toBe("mocked apple");
  expect(strawberry()).toBe("mocked strawberry");
}
