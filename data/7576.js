{
  var all = ReactTestUtils.scryRenderedDOMComponentsWithClass(root, className);

  if (all.length !== 1) {
    throw new Error(
      "Did not find exactly one match (found: " +
        all.length +
        ") " +
        "for class:" +
        className
    );
  }

  return all[0];
}
