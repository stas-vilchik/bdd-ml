{
  await jestExpect(Promise.reject(4)).rejects.toBe(4);
  await jestExpect(Promise.reject(4)).rejects.not.toBe(5);
  await jestExpect(Promise.reject(4.2)).rejects.toBeCloseTo(4.2, 5);
  await jestExpect(Promise.reject(3)).rejects.not.toBeCloseTo(4.2, 5);
  await jestExpect(Promise.reject({
    a: 1,
    b: 2
  })).rejects.toMatchObject({
    a: 1
  });
  await jestExpect(Promise.reject({
    a: 1,
    b: 2
  })).rejects.not.toMatchObject({
    c: 1
  });
  await jestExpect(Promise.reject(() => {
    throw new Error();
  })).rejects.toThrow();
}