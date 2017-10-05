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
      }
    ])
  );
}
