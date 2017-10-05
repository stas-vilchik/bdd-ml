{
  var all = ReactTestUtils.scryRenderedComponentsWithType(root, componentType);

  if (all.length !== 1) {
    throw new Error(
      "Did not find exactly one match (found: " +
        all.length +
        ") " +
        "for componentType:" +
        componentType
    );
  }

  return all[0];
}
