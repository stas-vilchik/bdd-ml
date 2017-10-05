{
  let error;

  try {
    await jestExpect(value).rejects.toBeDefined();
  } catch (e) {
    error = e;
  }

  expect(error).toBeDefined();
  expect(error.message).toMatchSnapshot();
}