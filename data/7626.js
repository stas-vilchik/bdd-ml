{
  expect(
    diff(
      {
        a: function() {
          return 1;
        },
        b: function() {
          return 2;
        },
        c: 3
      },
      {
        b: function() {
          return 9;
        },
        c: function() {
          return 3;
        }
      },
      {
        a: true,
        b: true,
        c: true
      }
    )
  ).toEqual({
    a: null,
    c: true
  });
}
