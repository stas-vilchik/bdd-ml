{
  const FileSummarizer = require("../FileSummarizer");

  const fileSummary = FileSummarizer.summarizeFilesInDirectorySync("/path/to");
  expect(fileSummary.length).toBe(2);
}
