{
  expect(typeof axios.request).toEqual("function");
  expect(typeof axios.get).toEqual("function");
  expect(typeof axios.head).toEqual("function");
  expect(typeof axios.options).toEqual("function");
  expect(typeof axios.delete).toEqual("function");
  expect(typeof axios.post).toEqual("function");
  expect(typeof axios.put).toEqual("function");
  expect(typeof axios.patch).toEqual("function");
}
