{
  var diffA = jest.fn();
  var diffB = jest.fn();
  expect(
    diff(
      {
        a: [1]
      },
      {
        b: [2]
      },
      {
        a: {
          diff: diffA
        },
        b: {
          diff: diffB
        }
      }
    )
  ).toEqual({
    a: null,
    b: [2]
  });
  expect(diffA).not.toBeCalled();
  expect(diffB).not.toBeCalled();
}
