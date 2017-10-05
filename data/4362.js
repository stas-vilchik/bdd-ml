{
  const test = {
    a: 1,
    b: "2",
    c: "three`"
  };
  expect(test).toMatchSnapshot();
  test.d = "4";
  expect(test).toMatchSnapshot();
}
