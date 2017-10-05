{
  expect(() => expect(() => {})[toThrow](Err)).toThrowErrorMatchingSnapshot();
}
