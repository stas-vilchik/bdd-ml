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
        ancestorTitles: ["A", "B"],
        failureMessages: [],
        numPassingAsserts: 1,
        title: "AB1"
      }
    ])
  ).toEqual(
    wrap([
      {
        suites: [
          {
            suites: [],
            tests: [
              {
                ancestorTitles: ["A", "B"],
                failureMessages: [],
                numPassingAsserts: 1,
                title: "AB1"
              }
            ],
            title: "B"
          }
        ],
        tests: [
          {
            ancestorTitles: ["A"],
            failureMessages: [],
            numPassingAsserts: 1,
            title: "A1"
          }
        ],
        title: "A"
      }
    ])
  );
}
