{
  var validStyleAttribute = {
    someStyle: {
      foo: true,
      bar: true
    }
  };
  expect(
    diff(
      {},
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
  expect(
    diff(
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
      {},
      validStyleAttribute
    )
  ).toEqual({
    foo: null,
    bar: null
  });
  var barStyle = ReactNativePropRegistry.register({
    bar: 3
  });
  expect(
    diff(
      {},
      {
        someStyle: [
          [
            {
              foo: 1
            },
            {
              foo: 2
            }
          ],
          barStyle
        ]
      },
      validStyleAttribute
    )
  ).toEqual({
    foo: 2,
    bar: 3
  });
}
