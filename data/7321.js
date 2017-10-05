{
  var input = getInput();
  FallbackCompositionState.initialize(input);
  input.value = modifiedValue;
  expect(FallbackCompositionState.getData()).toBe(expectedData);
  FallbackCompositionState.reset();
}
