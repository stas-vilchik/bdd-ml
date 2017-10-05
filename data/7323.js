{
  it("extracts when inserted at start of text", () => {
    assertExtractedData("XXXHello world", "XXX");
  });
  it("extracts when inserted within text", () => {
    assertExtractedData("Hello XXXworld", "XXX");
  });
  it("extracts when inserted at end of text", () => {
    assertExtractedData("Hello worldXXX", "XXX");
  });
}
