{
  const iterable = {
    0: "a",
    1: "b",
    2: "c",
    length: 3,
    [Symbol.iterator]: Array.prototype[Symbol.iterator]
  };
  const expectedIterable = {
    0: "a",
    1: "b",
    2: "c",
    length: 3,
    [Symbol.iterator]: Array.prototype[Symbol.iterator]
  };
  expect(iterable).toEqual(expectedIterable);
  expect(iterable).not.toEqual(["a", "b"]);
  expect(iterable).not.toEqual(["a", "b", "c"]);
  expect(iterable).not.toEqual(["a", "b", "c", "d"]);
}
