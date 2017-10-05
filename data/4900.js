{
  expect(data.clocks).toEqual({
    "/fruits": "c:fake-clock:3",
    "/vegetables": "c:fake-clock:4"
  });
  expect(data.files).toEqual({
    "/fruits/kiwi.js": ["", 42, 0, []],
    "/vegetables/melon.json": ["", 33, 0, []]
  });
}
