{
  var instance = axios.create({
    baseURL: "https://api.example.com"
  });
  expect(typeof instance.defaults.headers, "object");
  expect(typeof instance.defaults.headers.common, "object");
}
