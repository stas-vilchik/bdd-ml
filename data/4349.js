{
  const test = {
    $$typeof: Symbol.for("react.test.json"),
    children: null,
    props: {
      id: "foo"
    },
    type: "div"
  };
  expect(test).toMatchSnapshot();
}
