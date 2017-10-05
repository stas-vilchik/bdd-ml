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
        ancestorTitles: ["A", "B"],
        failureMessages: [],
        numPassingAsserts: 1,
        title: "AB2"
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
              },
              {
                ancestorTitles: ["A", "B"],
                failureMessages: [],
                numPassingAsserts: 1,
                title: "AB2"
              }
            ],
            title: "B"
          }
        ],
        tests: [],
        title: "A"
      }
    ])
  );
}
