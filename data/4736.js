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
        ancestorTitles: ["C", "D"],
        failureMessages: [],
        numPassingAsserts: 1,
        title: "CD1"
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
        tests: [],
        title: "A"
      },
      {
        suites: [
          {
            suites: [],
            tests: [
              {
                ancestorTitles: ["C", "D"],
                failureMessages: [],
                numPassingAsserts: 1,
                title: "CD1"
              }
            ],
            title: "D"
          }
        ],
        tests: [],
        title: "C"
      }
    ])
  );
}
