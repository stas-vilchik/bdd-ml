{
  describe("when the node has innerHTML property", () => {
    it("sets innerHTML on it", () => {
      var node = document.createElement("div");
      var html = "<h1>hello</h1>";
      setInnerHTML(node, html);
      expect(node.innerHTML).toBe(html);
    });
  });
  describe("when the node does not have an innerHTML property", () => {
    xit("sets innerHTML on it", () => {
      var node = {
        namespaceURI: Namespaces.svg,
        appendChild: jasmine.createSpy()
      };
      var html = "<circle></circle><rect></rect>";
      setInnerHTML(node, html);
      expect(node.appendChild.calls.argsFor(0)[0].outerHTML).toBe(
        "<circle></circle>"
      );
      expect(node.appendChild.calls.argsFor(1)[0].outerHTML).toBe(
        "<rect></rect>"
      );
    });
  });
}
