{
  function toJSON() {
    throw new Error("Nope.");
  }

  const evilA = {
    a: 1,
    toJSON
  };
  const evilB = {
    b: 1,
    toJSON
  };
  expect(() => expect(evilA).toEqual(evilB)).toThrowErrorMatchingSnapshot();
}
