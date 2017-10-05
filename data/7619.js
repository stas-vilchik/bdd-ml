{
  expect(
    diff(
      {
        a: [1],
        b: {
          k: [3, 4]
        },
        c: {
          k: [4, 4]
        }
      },
      {
        a: [2],
        b: {
          k: [3, 4]
        },
        c: {
          k: [4, 5]
        }
      },
      {
        a: true,
        b: true,
        c: true
      }
    )
  ).toEqual({
    a: [2],
    c: {
      k: [4, 5]
    }
  });
}
