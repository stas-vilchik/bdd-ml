{
  const iterable = {
    *[Symbol.iterator]() {
      yield 1;
      yield 2;
      yield 3;
    }
  };
  jestExpect(iterable).toContain(2);
  jestExpect(iterable).toContainEqual(2);
  expect(() => jestExpect(iterable).not.toContain(1)).toThrowError("toContain");
  expect(() => jestExpect(iterable).not.toContainEqual(1)).toThrowError(
    "toContainEqual"
  );
}
