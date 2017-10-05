{
  expect(combineURLs("https://api.github.com", "/users")).toBe(
    "https://api.github.com/users"
  );
}
