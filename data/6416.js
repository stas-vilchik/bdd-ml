{
  expect(() => parseAndEval(`'foo ' + true`)).toThrowError(/Unsupported type/);
  expect(() => parseAndEval(`'foo ' + 3`)).toThrowError(/Unsupported type/);
  expect(() => parseAndEval(`'foo ' + null`)).toThrowError(/Unsupported type/);
  expect(() => parseAndEval(`'foo ' + undefined`)).toThrowError(
    /Unsupported type/
  );
}
