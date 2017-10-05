{
  var diffA = jest.fn((a, b) => true);
  var diffB = jest.fn((a, b) => false);
  expect(
    diff(
      {
        a: [1],
        b: [3]
      },
      {
        a: [2],
        b: [4]
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
    a: [2]
  });
  expect(diffA).toBeCalledWith([1], [2]);
  expect(diffB).toBeCalledWith([3], [4]);
}
