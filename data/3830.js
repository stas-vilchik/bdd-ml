{
  support
    .createUser()
    .then(data => {
      user = data;
      return p.Project.newAndSave({
        user: user._id,
        name: "pro"
      });
    })
    .then(pro => {
      project = pro[0];
      return p.Mock.newAndSave({
        project: project._id,
        description: "我是描述",
        method: "GET",
        url: "/api",
        mode: "{}"
      });
    })
    .then(data => {
      mock = data[0];
      done();
    });
}
