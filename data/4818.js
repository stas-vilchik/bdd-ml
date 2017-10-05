{
  expect(data.files).toEqual({
    "/fruits/strawberry.android.js": ["Strawberry", 32, 1, ["Blackberry"]],
    "/fruits/strawberry.ios.js": ["Strawberry", 32, 1, ["Raspberry"]],
    "/fruits/strawberry.js": ["Strawberry", 32, 1, ["Banana"]]
  });
  expect(data.map).toEqual({
    Strawberry: {
      [H.GENERIC_PLATFORM]: ["/fruits/strawberry.js", H.MODULE],
      android: ["/fruits/strawberry.android.js", H.MODULE],
      ios: ["/fruits/strawberry.ios.js", H.MODULE]
    }
  });
}
