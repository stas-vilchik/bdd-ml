{
  if (ReactTestUtils.isDOMComponent(inst)) {
    var className = inst.className;

    if (typeof className !== "string") {
      className = inst.getAttribute("class") || "";
    }

    var classList = className.split(/\s+/);

    if (!Array.isArray(classNames)) {
      invariant(
        classNames !== undefined,
        "TestUtils.scryRenderedDOMComponentsWithClass expects a " +
          "className as a second argument."
      );
      classNames = classNames.split(/\s+/);
    }

    return classNames.every(function(name) {
      return classList.indexOf(name) !== -1;
    });
  }

  return false;
}
