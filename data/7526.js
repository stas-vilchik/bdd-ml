{
  it("sets innerHTML on it", () => {
    var node = document.createElement("div");
    var html = "<h1>hello</h1>";
    setInnerHTML(node, html);
    expect(node.innerHTML).toBe(html);
  });
}
