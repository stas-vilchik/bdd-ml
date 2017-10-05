{
  expect(
    diff(
      {
        a: 1,
        b: "two",
        c: true,
        d: false,
        e: undefined,
        f: 0
      },
      {
        a: 1,
        b: "two",
        c: true,
        d: false,
        e: undefined,
        f: 0
      },
      {
        a: true,
        b: true,
        c: true,
        d: true,
        e: true,
        f: true
      }
    )
  ).toEqual(null);
}
