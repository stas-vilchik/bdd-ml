{
  jestExpect(() => {
    throw new TypeError('"this"? throws.');
  })[toThrow]('"this"? throws.');
}
