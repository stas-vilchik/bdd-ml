{
  require("passthrough-preprocessor").process.mockReturnValue(returnValue);

  expect(() => scriptTransformer.transform(filePath, {})).not.toThrow();
}
