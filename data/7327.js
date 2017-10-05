{
  it("extracts when inserted at start of text", () => {
    assertExtractedData("XXX world", "XXX");
  });
  it("extracts when inserted within text", () => {
    assertExtractedData("HelXXXrld", "XXX");
  });
  it("extracts when inserted at end of text", () => {
    assertExtractedData("Hello XXX", "XXX");
  });
}
