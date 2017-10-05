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
        ancestorTitles: ["B"],
        failureMessages: [],
        numPassingAsserts: 1,
        title: "B1"
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
          }
        ],
        title: "B"
      }
    ])
  );
}
