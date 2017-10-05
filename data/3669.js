{
  const newBody = Object.assign(
    {},
    {
      project_id: projects[0]._id,
      url: "/u",
      method: "get",
      mode: '{"success": true}',
      description: "测试mock"
    },
    body
  );
  return support
    .r("post", "/mock/create", token || user.token, newBody)
    .then(data => {
      data.mockUrl = `/${user.name}${project.url}${newBody.url}`;
      return data;
    });
}
