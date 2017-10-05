{
  const evil = {
    toJSON() {
      throw new Error("Nope.");
    }
  };
  expect(stringify(evil)).toBe('{"toJSON": [Function toJSON]}');
  expect(
    stringify({
      a: {
        b: {
          evil
        }
      }
    })
  ).toBe('{"a": {"b": {"evil": {"toJSON": [Function toJSON]}}}}');

  function Evil() {}

  Evil.toJSON = evil.toJSON;
  expect(stringify(Evil)).toBe("[Function Evil]");
}
