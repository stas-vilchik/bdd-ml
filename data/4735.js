{
  expect(
    groupTestsBySuites([
      {
        ancestorTitles: ["A", "B"],
        failureMessages: [],
        numPassingAsserts: 1,
        title: "AB1"
      },
      {
        ancestorTitles: ["A"],
        failureMessages: [],
        numPassingAsserts: 1,
        title: "A1"
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
