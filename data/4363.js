{
  const test = {
    a: 43,
    b: "43",
    c: "fourtythree"
  };
  expect(test).toMatchSnapshot();
}
