{
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
}
