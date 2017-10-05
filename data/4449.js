{
  let error;

  try {
    await jestExpect(Promise.resolve(4)).rejects.toBe(4);
  } catch (e) {
    error = e;
  }

  expect(error).toBeDefined();
  expect(error.message).toMatchSnapshot();
}