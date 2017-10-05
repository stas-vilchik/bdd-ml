{
  const test = {
    $$typeof: Symbol.for("react.test.json"),
    children: null,
    props: {
      aProp: {
        a: 6
      },
      bProp: {
        foo: 8
      }
    },
    type: "div"
  };
  expect(test).toMatchSnapshot();
}
