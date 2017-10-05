{
  expect(
    invertObject({
      a: "3",
      b: "4",
      c: "3"
    })
  ).toEqual({
    4: "b",
    3: "c"
  });
}
