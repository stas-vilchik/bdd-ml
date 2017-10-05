{
  cookies.write("foo", "bar");
  cookies.remove("foo");
  expect(cookies.read("foo")).toEqual(null);
}
