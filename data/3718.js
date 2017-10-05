{
  support
    .createUser()
    .then(data => {
      user = data;
      create = support.cp(user.token);
      getProject = support.gp(user.token);
      return support.createUser({
        name: "qqqq3"
      });
    })
    .then(data => {
      user2 = data;
      done();
    });
}
