{
  [
    [
      {
        a: {
          b: {
            c: {
              d: 1
            }
          }
        }
      },
      "a.b.c.d",
      1
    ],
    [
      {
        a: 0
      },
      "a",
      0
    ],
    [
      {
        a: {
          b: undefined
        }
      },
      "a.b",
      undefined
    ],
    [
      {
        a: {
          b: {
            c: 5
          }
        }
      },
      "a.b",
      {
        c: 5
      }
    ],
    [
      Object.assign(Object.create(null), {
        property: 1
      }),
      "property",
      1
    ]
  ].forEach(([obj, keyPath, value]) => {
    test(`{pass: true} expect(${stringify(
      obj
    )}).toHaveProperty('${keyPath}', ${stringify(value)})`, () => {
      jestExpect(obj).toHaveProperty(keyPath, value);
      expect(() =>
        jestExpect(obj).not.toHaveProperty(keyPath, value)
      ).toThrowErrorMatchingSnapshot();
    });
  });
  [
    [
      {
        a: {
          b: {
            c: {
              d: 1
            }
          }
        }
      },
      "a.b.ttt.d",
      1
    ],
    [
      {
        a: {
          b: {
            c: {
              d: 1
            }
          }
        }
      },
      "a.b.c.d",
      2
    ],
    [
      {
        a: {
          b: {
            c: {}
          }
        }
      },
      "a.b.c.d",
      1
    ],
    [
      {
        a: 1
      },
      "a.b.c.d",
      5
    ],
    [{}, "a", "test"],
    [
      {
        a: {
          b: 3
        }
      },
      "a.b",
      undefined
    ],
    [1, "a.b.c", "test"],
    [
      "abc",
      "a.b.c",
      {
        a: 5
      }
    ],
    [
      {
        a: {
          b: {
            c: 5
          }
        }
      },
      "a.b",
      {
        c: 4
      }
    ]
  ].forEach(([obj, keyPath, value]) => {
    test(`{pass: false} expect(${stringify(
      obj
    )}).toHaveProperty('${keyPath}', ${stringify(value)})`, () => {
      expect(() =>
        jestExpect(obj).toHaveProperty(keyPath, value)
      ).toThrowErrorMatchingSnapshot();
      jestExpect(obj).not.toHaveProperty(keyPath, value);
    });
  });
  [
    [
      {
        a: {
          b: {
            c: {
              d: 1
            }
          }
        }
      },
      "a.b.c.d"
    ],
    [
      {
        a: 0
      },
      "a"
    ],
    [
      {
        a: {
          b: undefined
        }
      },
      "a.b"
    ]
  ].forEach(([obj, keyPath]) => {
    test(`{pass: true} expect(${stringify(
      obj
    )}).toHaveProperty('${keyPath}')'`, () => {
      jestExpect(obj).toHaveProperty(keyPath);
      expect(() =>
        jestExpect(obj).not.toHaveProperty(keyPath)
      ).toThrowErrorMatchingSnapshot();
    });
  });
  [
    [
      {
        a: {
          b: {
            c: {}
          }
        }
      },
      "a.b.c.d"
    ],
    [
      {
        a: 1
      },
      "a.b.c.d"
    ],
    [{}, "a"],
    [1, "a.b.c"],
    ["abc", "a.b.c"]
  ].forEach(([obj, keyPath]) => {
    test(`{pass: false} expect(${stringify(
      obj
    )}).toHaveProperty('${keyPath}')`, () => {
      expect(() =>
        jestExpect(obj).toHaveProperty(keyPath)
      ).toThrowErrorMatchingSnapshot();
      jestExpect(obj).not.toHaveProperty(keyPath);
    });
  });
  [
    [null, "a.b"],
    [undefined, "a"],
    [
      {
        a: {
          b: {}
        }
      },
      undefined
    ],
    [
      {
        a: {
          b: {}
        }
      },
      null
    ],
    [
      {
        a: {
          b: {}
        }
      },
      1
    ]
  ].forEach(([obj, keyPath]) => {
    test(`{error} expect(${stringify(
      obj
    )}).toHaveProperty('${keyPath}')`, () => {
      expect(() =>
        jestExpect(obj).toHaveProperty(keyPath)
      ).toThrowErrorMatchingSnapshot();
    });
  });
}
