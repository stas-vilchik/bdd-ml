{
  var result1 = runJest("ReactTypeScriptClass-test.ts");
  var result2 = runJest("ReactES6Class-test.js");
  compareResults(result1, result2);
}
