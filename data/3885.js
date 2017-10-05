{
  const newBody = Object.assign(
    {},
    {
      name: "chuangker",
      nick_name: "chuangker",
      password: "123456",
      head_img: "example.com/head.jpg"
    },
    body || {}
  );
  return exports
    .r("post", "/u/register", "", newBody)
    .then(() =>
      exports.r("post", "/u/login", "", {
        name: newBody.name,
        password: newBody.password
      })
    )
    .then(data => data.data);
}
