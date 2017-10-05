{
  const path = require("path");

  const processorPath = path.resolve(
    __dirname,
    "../testResultsProcessor/processor.js"
  );
  const result = runJest.json("testResultsProcessor", [
    "--json",
    `--testResultsProcessor=${processorPath}`
  ]);
  const json = result.json;
  expect(json.processed).toBe(true);
}
