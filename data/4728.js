{
  expect(
    groupTestsBySuites([
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
      }
    ])
  );
}
