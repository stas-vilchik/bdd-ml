{
  support
    .createUser()
    .then(data => {
      user = data;
      return support.gp(user.token)();
    })
    .then(data => {
      project = data.data[0];
      done();
    });
}
