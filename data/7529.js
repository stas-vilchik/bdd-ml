{
  var node = {
    namespaceURI: Namespaces.svg,
    appendChild: jasmine.createSpy()
  };
  var html = "<circle></circle><rect></rect>";
  setInnerHTML(node, html);
  expect(node.appendChild.calls.argsFor(0)[0].outerHTML).toBe(
    "<circle></circle>"
  );
  expect(node.appendChild.calls.argsFor(1)[0].outerHTML).toBe("<rect></rect>");
}
