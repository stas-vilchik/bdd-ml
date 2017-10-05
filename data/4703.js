{
  [
    [
      {
        a: "b",
        c: "d"
      },
      {
        a: "d"
      },
      {
        a: "b"
      }
    ],
    [
      {
        a: [1, 2],
        b: "b"
      },
      {
        a: [3, 4]
      },
      {
        a: [1, 2]
      }
    ],
    [
      [
        {
          a: "b",
          c: "d"
        }
      ],
      [
        {
          a: "z"
        }
      ],
      [
        {
          a: "b"
        }
      ]
    ],
    [[1, 2], [1, 2, 3], [1, 2]],
    [
      {
        a: [1]
      },
      {
        a: [1, 2]
      },
      {
        a: [1]
      }
    ],
    [new Date("2015-11-30"), new Date("2016-12-30"), new Date("2015-11-30")]
  ].forEach(([object, subset, expected]) => {
    test(
      `expect(getObjectSubset(${stringify(object)}, ${stringify(subset)}))` +
        `.toEqual(${stringify(expected)})`,
      () => {
        expect(getObjectSubset(object, subset)).toEqual(expected);
      }
    );
  });
}
