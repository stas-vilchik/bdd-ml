{
  await jestExpect(Promise.resolve(4)).resolves.toBe(4);
  await jestExpect(Promise.resolve(4)).resolves.not.toBe(5);
  await jestExpect(Promise.resolve(4.2)).resolves.toBeCloseTo(4.2, 5);
  await jestExpect(Promise.resolve(3)).resolves.not.toBeCloseTo(4.2, 5);
  await jestExpect(Promise.resolve({
    a: 1,
    b: 2
  })).resolves.toMatchObject({
    a: 1
  });
  await jestExpect(Promise.resolve({
    a: 1,
    b: 2
  })).resolves.not.toMatchObject({
    c: 1
  });
  await jestExpect(Promise.resolve(() => {
    throw new Error();
  })).resolves.toThrow();
}