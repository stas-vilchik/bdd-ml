{
  expect(
    groupTestsBySuites([
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
        tests: [],
        title: "A"
      }
    ])
  );
}
