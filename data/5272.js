{
  const actual = "a";
  const expected = "b";
  const matcher = toMatchSnapshot.bind({
    snapshotState: {
      match: (testName, received) => ({
        actual,
        expected
      })
    }
  });
  const matcherResult = matcher({
    a: 1
  });
  expect(matcherResult).toEqual(
    expect.objectContaining({
      actual,
      expected,
      name: "toMatchSnapshot"
    })
  );
}
