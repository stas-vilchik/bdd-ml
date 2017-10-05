{
  jest.resetModules();
  fs = require("fs");
  generateEmptyCoverage = require("../../generate_empty_coverage").default;
  worker = require("../coverage_worker");
}
