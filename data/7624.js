{
  var validStyleAttribute = {
    someStyle: {
      foo: true,
      bar: true
    }
  };
  expect(
    diff(
      {
        someStyle: [
          {},
          {
            foo: 3,
            bar: 2
          }
        ]
      },
      {
        someStyle: [
          {
            foo: 3
          },
          {
            bar: 2
          }
        ]
      },
      validStyleAttribute
    )
  ).toEqual({
    foo: 3
  });
  expect(
    diff(
      {
        someStyle: [
          {},
          {
            foo: 3,
            bar: 2
          }
        ]
      },
      {
        someStyle: [
          {
            foo: 1,
            bar: 1
          },
          {
            bar: 2
          }
        ]
      },
      validStyleAttribute
    )
  ).toEqual({
    bar: 2,
    foo: 1
  });
}
