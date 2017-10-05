{
  cookies.write("foo", "baz");
  expect(document.cookie).toEqual("foo=baz");
}
