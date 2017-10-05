{
  mockTagName = mockTagName || module.mockTagName || "div";
  module.prototype.render.mockImplementation(function() {
    return React.createElement(mockTagName, null, this.props.children);
  });
  return this;
}
