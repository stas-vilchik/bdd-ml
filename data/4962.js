{
  const func = function func() {};

  const multipleBoundFunc = func.bind(null).bind(null);
  const multipleBoundFuncMock = moduleMocker.generateFromMetadata(
    moduleMocker.getMetadata(multipleBoundFunc)
  );
  expect(typeof multipleBoundFuncMock).toBe("function");
}
