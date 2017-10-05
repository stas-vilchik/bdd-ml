{
  const reporter = new DefaultReporter({
    rootDir: "",
    useStderr: false
  });
  reporter.onRunStart(aggregatedResults, options);
  reporter.onTestStart(testCase);
  reporter.onTestResult(testCase, testResult, aggregatedResults);
  reporter.onRunComplete();
  jest.runAllTimers();
  expect(stdout).toHaveBeenCalled();
}
