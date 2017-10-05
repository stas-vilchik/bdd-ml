{
  runAndAssert();

  const snapshot = require(snapshotPath);

  expect(snapshot).toMatchSnapshot();
}
