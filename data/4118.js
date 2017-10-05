{
  it("correctly makes use of internal module registry when requiring modules", () => {
    const { json } = runJest.json("runtime-internal-module-registry", []);
    expect(json.numTotalTests).toBe(1);
    expect(json.numPassedTests).toBe(1);
  });
}
