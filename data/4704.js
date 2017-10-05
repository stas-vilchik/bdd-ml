{
  test(
    `expect(getObjectSubset(${stringify(object)}, ${stringify(subset)}))` +
      `.toEqual(${stringify(expected)})`,
    () => {
      expect(getObjectSubset(object, subset)).toEqual(expected);
    }
  );
}
