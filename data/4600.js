{
  [
    [
      {
        a: "b",
        c: "d"
      },
      {
        a: "b"
      }
    ],
    [
      {
        a: "b",
        c: "d"
      },
      {
        a: "b",
        c: "d"
      }
    ],
    [
      {
        a: "b",
        t: {
          x: {
            r: "r"
          },
          z: "z"
        }
      },
      {
        a: "b",
        t: {
          z: "z"
        }
      }
    ],
    [
      {
        a: "b",
        t: {
          x: {
            r: "r"
          },
          z: "z"
        }
      },
      {
        t: {
          x: {
            r: "r"
          }
        }
      }
    ],
    [
      {
        a: [3, 4, 5],
        b: "b"
      },
      {
        a: [3, 4, 5]
      }
    ],
    [
      {
        a: [3, 4, 5, "v"],
        b: "b"
      },
      {
        a: [3, 4, 5, "v"]
      }
    ],
    [
      {
        a: 1,
        c: 2
      },
      {
        a: jestExpect.any(Number)
      }
    ],
    [
      {
        a: {
          x: "x",
          y: "y"
        }
      },
      {
        a: {
          x: jestExpect.any(String)
        }
      }
    ],
    [new Set([1, 2]), new Set([1, 2])],
    [new Set([1, 2]), new Set([2, 1])],
    [new Date("2015-11-30"), new Date("2015-11-30")],
    [
      {
        a: new Date("2015-11-30"),
        b: "b"
      },
      {
        a: new Date("2015-11-30")
      }
    ],
    [
      {
        a: null,
        b: "b"
      },
      {
        a: null
      }
    ],
    [
      {
        a: undefined,
        b: "b"
      },
      {
        a: undefined
      }
    ],
    [
      {
        a: [
          {
            a: "a",
            b: "b"
          }
        ]
      },
      {
        a: [
          {
            a: "a"
          }
        ]
      }
    ],
    [[1, 2], [1, 2]],
    [
      {
        a: undefined
      },
      {
        a: undefined
      }
    ],
    [[], []],
    [new Error("foo"), new Error("foo")]
  ].forEach(([n1, n2]) => {
    it(`{pass: true} expect(${stringify(n1)}).toMatchObject(${stringify(
      n2
    )})`, () => {
      jestExpect(n1).toMatchObject(n2);
      expect(() =>
        jestExpect(n1).not.toMatchObject(n2)
      ).toThrowErrorMatchingSnapshot();
    });
  });
  [
    [
      {
        a: "b",
        c: "d"
      },
      {
        e: "b"
      }
    ],
    [
      {
        a: "b",
        c: "d"
      },
      {
        a: "b!",
        c: "d"
      }
    ],
    [
      {
        a: "a",
        c: "d"
      },
      {
        a: jestExpect.any(Number)
      }
    ],
    [
      {
        a: "b",
        t: {
          x: {
            r: "r"
          },
          z: "z"
        }
      },
      {
        a: "b",
        t: {
          z: [3]
        }
      }
    ],
    [
      {
        a: "b",
        t: {
          x: {
            r: "r"
          },
          z: "z"
        }
      },
      {
        t: {
          l: {
            r: "r"
          }
        }
      }
    ],
    [
      {
        a: [3, 4, 5],
        b: "b"
      },
      {
        a: [3, 4, 5, 6]
      }
    ],
    [
      {
        a: [3, 4, 5],
        b: "b"
      },
      {
        a: [3, 4]
      }
    ],
    [
      {
        a: [3, 4, "v"],
        b: "b"
      },
      {
        a: ["v"]
      }
    ],
    [
      {
        a: [3, 4, 5],
        b: "b"
      },
      {
        a: {
          b: 4
        }
      }
    ],
    [
      {
        a: [3, 4, 5],
        b: "b"
      },
      {
        a: {
          b: jestExpect.any(String)
        }
      }
    ],
    [[1, 2], [1, 3]],
    [[0], [-0]],
    [new Set([1, 2]), new Set([2])],
    [new Date("2015-11-30"), new Date("2015-10-10")],
    [
      {
        a: new Date("2015-11-30"),
        b: "b"
      },
      {
        a: new Date("2015-10-10")
      }
    ],
    [
      {
        a: null,
        b: "b"
      },
      {
        a: "4"
      }
    ],
    [
      {
        a: null,
        b: "b"
      },
      {
        a: undefined
      }
    ],
    [
      {
        a: undefined
      },
      {
        a: null
      }
    ],
    [
      {
        a: [
          {
            a: "a",
            b: "b"
          }
        ]
      },
      {
        a: [
          {
            a: "c"
          }
        ]
      }
    ],
    [
      {
        a: 1,
        b: 1,
        c: 1,
        d: {
          e: {
            f: 555
          }
        }
      },
      {
        d: {
          e: {
            f: 222
          }
        }
      }
    ],
    [
      {},
      {
        a: undefined
      }
    ],
    [[1, 2, 3], [2, 3, 1]],
    [[1, 2, 3], [1, 2, 2]],
    [new Error("foo"), new Error("bar")]
  ].forEach(([n1, n2]) => {
    it(`{pass: false} expect(${stringify(n1)}).toMatchObject(${stringify(
      n2
    )})`, () => {
      jestExpect(n1).not.toMatchObject(n2);
      expect(() =>
        jestExpect(n1).toMatchObject(n2)
      ).toThrowErrorMatchingSnapshot();
    });
  });
  [
    [null, {}],
    [4, {}],
    ["44", {}],
    [true, {}],
    [undefined, {}],
    [{}, null],
    [{}, 4],
    [{}, "some string"],
    [{}, true],
    [{}, undefined]
  ].forEach(([n1, n2]) => {
    it(`throws expect(${stringify(n1)}).toMatchObject(${stringify(
      n2
    )})`, () => {
      expect(() =>
        jestExpect(n1).toMatchObject(n2)
      ).toThrowErrorMatchingSnapshot();
    });
  });
}
