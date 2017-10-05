{
  expect(data.files).toEqual({
    "/fruits/strawberry.js": ["", 32, 0, []],
    "/fruits/tomato.js": tomato
  });
  expect(data.files["/fruits/tomato.js"]).toBe(tomato);
}
