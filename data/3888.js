{
  const newBody = Object.assign(
    {},
    {
      name: "project",
      url: "/project",
      description: "我是描述",
      swagger_url: "http://127.0.0.1:7400"
    },
    body
  );
  return exports.r("post", "/project/create", token, newBody);
}
