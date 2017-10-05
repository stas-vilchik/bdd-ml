{
  expect(
    groupTestsBySuites([
      {
        ancestorTitles: ["A"],
        failureMessages: [],
        numPassingAsserts: 1,
        title: "A1"
      },
      {
        ancestorTitles: ["A"],
        failureMessages: [],
        numPassingAsserts: 1,
        title: "A2"
      },
      {
        ancestorTitles: ["B"],
        failureMessages: [],
        numPassingAsserts: 1,
        title: "B1"
      },
      {
        ancestorTitles: ["B"],
        failureMessages: [],
        numPassingAsserts: 1,
        title: "B2"
      }
    ])
  ).toEqual(
    wrap([
      {
        suites: [],
        tests: [
          {
            ancestorTitles: ["A"],
            failureMessages: [],
            numPassingAsserts: 1,
            title: "A1"
          },
          {
            ancestorTitles: ["A"],
            failureMessages: [],
            numPassingAsserts: 1,
            title: "A2"
          }
        ],
        title: "A"
      },
      {
        suites: [],
        tests: [
          {
            ancestorTitles: ["B"],
            failureMessages: [],
            numPassingAsserts: 1,
            title: "B1"
          },
          {
            ancestorTitles: ["B"],
            failureMessages: [],
            numPassingAsserts: 1,
            title: "B2"
          }
        ],
        title: "B"
      }
    ])
  );
}
