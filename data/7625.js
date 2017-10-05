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
            foo: 1
          },
          {
            bar: 2,
            foo: null
          }
        ]
      },
      validStyleAttribute
    )
  ).toEqual({
    foo: null
  });
  expect(
    diff(
      {
        someStyle: [
          {
            foo: 3
          },
          {
            foo: null,
            bar: 2
          }
        ]
      },
      {
        someStyle: [
          {
            foo: null
          },
          {
            bar: 2
          }
        ]
      },
      validStyleAttribute
    )
  ).toEqual({
    foo: null
  });
  expect(
    diff(
      {
        someStyle: [
          {
            foo: 1
          },
          {
            foo: null
          }
        ]
      },
      {
        someStyle: [
          {
            foo: 2
          },
          {
            foo: null
          }
        ]
      },
      validStyleAttribute
    )
  ).toEqual({
    foo: null
  });
  var fooObj = {
    foo: 3
  };
  expect(
    diff(
      {
        someStyle: [
          {
            foo: 1
          },
          fooObj
        ]
      },
      {
        someStyle: [
          {
            foo: 2
          },
          fooObj
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
            foo: 2
          },
          {
            foo: undefined
          }
        ]
      },
      validStyleAttribute
    )
  ).toEqual({
    foo: null
  });
}
