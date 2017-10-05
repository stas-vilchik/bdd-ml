{
  var regexp = /EQUIVALENCE.*$/gm;
  var aSpecs = (a.match(regexp) || []).sort().join("\n");
  var bSpecs = (b.match(regexp) || []).sort().join("\n");

  if (aSpecs.length === 0 && bSpecs.length === 0) {
    throw new Error("No spec results found in the output");
  }

  expect(aSpecs).toEqual(bSpecs);
}
