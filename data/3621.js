{
  support
    .createUser()
    .then(data => {
      token = data.token;
      return support.createUser({
        name: "vvvvv"
      });
    })
    .then(data => {
      token2 = data.token;
      done();
    });
}
