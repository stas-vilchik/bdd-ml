{
  const result = runJest.json("setup_test_framework_script_file_cli_config", [
    "--setupTestFrameworkScriptFile",
    "./setup_hooks_into_runner.js",
    "runner_patch.test.js"
  ]);
  expect(result.json.numTotalTests).toBe(1);
  expect(result.json.numPassedTests).toBe(1);
  expect(result.json.testResults.length).toBe(1);
  expect(result.status).toBe(0);
}
