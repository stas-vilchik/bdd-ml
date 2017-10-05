{
  expect(
    groupTestsBySuites([
      {
        ancestorTitles: ["A", "B", "C"],
        failureMessages: [],
        numPassingAsserts: 1,
        title: "ABC1"
      },
      {
        ancestorTitles: ["B", "C"],
        failureMessages: [],
        numPassingAsserts: 1,
        title: "BC1"
      },
      {
        ancestorTitles: ["D"],
        failureMessages: [],
        numPassingAsserts: 1,
        title: "D1"
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
            suites: [
              {
                suites: [],
                tests: [
                  {
                    ancestorTitles: ["A", "B", "C"],
                    failureMessages: [],
                    numPassingAsserts: 1,
                    title: "ABC1"
                  }
                ],
                title: "C"
              }
            ],
            tests: [],
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
      },
      {
        suites: [
          {
            suites: [],
            tests: [
              {
                ancestorTitles: ["B", "C"],
                failureMessages: [],
                numPassingAsserts: 1,
                title: "BC1"
              }
            ],
            title: "C"
          }
        ],
        tests: [],
        title: "B"
      },
      {
        suites: [],
        tests: [
          {
            ancestorTitles: ["D"],
            failureMessages: [],
            numPassingAsserts: 1,
            title: "D1"
          }
        ],
        title: "D"
      }
    ])
  );
}
