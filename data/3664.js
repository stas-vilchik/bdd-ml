{
  support
    .createUser()
    .then(data => {
      user = data;
      createPro = support.cp(user.token);
      getProject = support.gp(user.token);
      return support.createUser({
        name: "qqqq"
      });
    })
    .then(data => (user2 = data))
    .then(() =>
      support.createUser({
        name: "vvvvv"
      })
    )
    .then(data => (user3 = data))
    .then(() =>
      createPro({
        members: [user2._id]
      })
    )
    .then(() => getProject())
    .then(data => {
      project = data.data[1];
      projects = data.data;
      done();
    });
}
