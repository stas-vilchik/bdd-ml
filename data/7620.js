{
  expect(
    diff(
      {
        style: {
          a: "#ffffff",
          b: 1
        }
      },
      {
        style: undefined
      },
      {
        style: {
          b: true
        }
      }
    )
  ).toEqual({
    b: null
  });
  expect(
    diff(
      {
        style: undefined
      },
      {
        style: {
          a: "#ffffff",
          b: 1
        }
      },
      {
        style: {
          b: true
        }
      }
    )
  ).toEqual({
    b: 1
  });
  expect(
    diff(
      {
        style: undefined
      },
      {
        style: undefined
      },
      {
        style: {
          b: true
        }
      }
    )
  ).toEqual(null);
}
