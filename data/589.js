{
  cookies.write("foo", "bar baz%");
  expect(document.cookie).toEqual("foo=bar%20baz%25");
}
