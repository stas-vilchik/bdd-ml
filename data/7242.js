{
  var result1 = runJest("ReactCoffeeScriptClass-test.coffee");
  var result2 = runJest("ReactES6Class-test.js");
  compareResults(result1, result2);
}
