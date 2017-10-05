{
  expect(data.clocks).toEqual(mockClocks);
  expect(data.files).toEqual({
    "/fruits/__mocks__/Pear.js": ["", 32, 1, ["Melon"]],
    "/fruits/banana.js": ["Banana", 32, 1, ["Strawberry"]],
    "/fruits/node_modules/fbjs/lib/flatMap.js": ["flatMap", 32, 1, []],
    "/fruits/node_modules/react/react.js": ["React", 32, 1, ["Component"]],
    "/fruits/pear.js": ["Pear", 32, 1, ["Banana", "Strawberry"]],
    "/fruits/strawberry.js": ["Strawberry", 32, 1, []],
    "/vegetables/melon.js": ["Melon", 32, 1, []]
  });
  expect(data.map).toEqual({
    Banana: {
      [H.GENERIC_PLATFORM]: ["/fruits/banana.js", H.MODULE]
    },
    Melon: {
      [H.GENERIC_PLATFORM]: ["/vegetables/melon.js", H.MODULE]
    },
    Pear: {
      [H.GENERIC_PLATFORM]: ["/fruits/pear.js", H.MODULE]
    },
    React: {
      [H.GENERIC_PLATFORM]: ["/fruits/node_modules/react/react.js", H.MODULE]
    },
    Strawberry: {
      [H.GENERIC_PLATFORM]: ["/fruits/strawberry.js", H.MODULE]
    },
    flatMap: {
      [H.GENERIC_PLATFORM]: [
        "/fruits/node_modules/fbjs/lib/flatMap.js",
        H.MODULE
      ]
    }
  });
  expect(data.mocks).toEqual({
    Pear: "/fruits/__mocks__/Pear.js"
  });
  expect(hasteMap.read()).toEqual(data);
}
