{
  it("tests the same thing for es6 classes and CoffeeScript", () => {
    var result1 = runJest("ReactCoffeeScriptClass-test.coffee");
    var result2 = runJest("ReactES6Class-test.js");
    compareResults(result1, result2);
  });
  it("tests the same thing for es6 classes and TypeScript", () => {
    var result1 = runJest("ReactTypeScriptClass-test.ts");
    var result2 = runJest("ReactES6Class-test.js");
    compareResults(result1, result2);
  });
}
