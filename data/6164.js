{
  expect(
    invertObject({
      a: "3",
      b: "4"
    })
  ).toEqual({
    3: "a",
    4: "b"
  });
}
