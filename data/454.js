{
  expect(typeof axios.interceptors.request).toEqual("object");
  expect(typeof axios.interceptors.response).toEqual("object");
}
