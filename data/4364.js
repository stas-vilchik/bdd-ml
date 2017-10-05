{
  expect(() => expect("").not.toMatchSnapshot()).toThrow(
    "Jest: `.not` cannot be used with `.toMatchSnapshot()`."
  );
}
