{
  expect(
    Object.keys(
      invertObject({
        a: "3",
        b: "4",
        c: "3"
      })
    )
  ).toEqual(["3", "4"]);
  expect(
    objectValues(
      invertObject({
        a: "3",
        b: "4",
        c: "3"
      })
    )
  ).toEqual(["c", "b"]);
}
