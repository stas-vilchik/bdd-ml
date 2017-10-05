{
  let error;

  try {
    await jestExpect(Promise.reject(4)).resolves.toBe(4);
  } catch (e) {
    error = e;
  }

  expect(error).toBeDefined();
  expect(error.message).toMatchSnapshot();
}