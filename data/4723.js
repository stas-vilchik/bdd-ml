{
  const reporter = new DefaultReporter({
    rootDir: "",
    useStderr: true
  });
  reporter.onRunStart(aggregatedResults, options);
  reporter.onTestStart(testCase);
  reporter.onTestResult(testCase, testResult, aggregatedResults);
  reporter.onRunComplete();
  jest.runAllTimers();
  expect(stdout).not.toHaveBeenCalled();
}
