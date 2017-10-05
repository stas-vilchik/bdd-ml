{
  it("requires a setup file before each file in the suite", () => {
    const result = runJest.json("setup_test_framework_script_file_cli_config", [
      "--setupTestFrameworkScriptFile",
      "./setup1.js",
      "test1.test.js",
      "test2.test.js"
    ]);
    expect(result.status).toBe(0);
    expect(result.json.numTotalTests).toBe(2);
    expect(result.json.numPassedTests).toBe(2);
    expect(result.json.testResults.length).toBe(2);
  });
  it("requires setup files *after* the test runners are required", () => {
    const result = runJest.json("setup_test_framework_script_file_cli_config", [
      "--setupTestFrameworkScriptFile",
      "./setup_hooks_into_runner.js",
      "runner_patch.test.js"
    ]);
    expect(result.json.numTotalTests).toBe(1);
    expect(result.json.numPassedTests).toBe(1);
    expect(result.json.testResults.length).toBe(1);
    expect(result.status).toBe(0);
  });
}
