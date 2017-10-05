{
  const test = {
    a: 1,
    b: "2",
    c: "three`",
    d: "vier"
  };
  expect(test).toMatchSnapshot();
}
