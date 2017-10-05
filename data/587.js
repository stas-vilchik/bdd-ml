{
  cookies.write("foo", "abc");
  cookies.write("bar", "def");
  expect(cookies.read("foo")).toEqual("abc");
  expect(cookies.read("bar")).toEqual("def");
}
