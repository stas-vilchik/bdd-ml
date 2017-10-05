{
  require("passthrough-preprocessor").process.mockReturnValue(returnValue);

  expect(() => scriptTransformer.transform(filePath, {})).toThrow(
    "must return a string"
  );
}
