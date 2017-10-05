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
          {
            foo: 1
          },
          {
            foo: 3
          }
        ]
      },
      {
        someStyle: [
          {
            foo: 1
          },
          {
            bar: 2
          }
        ]
      },
      validStyleAttribute
    )
  ).toEqual({
    foo: 1,
    bar: 2
  });
}
