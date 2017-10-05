{
  login()
    .then(data =>
      support.r("post", "/u/update", data.data.token, {
        password: "111"
      })
    )
    .then(data => {
      data.message.should.be.eql("params error");
      done();
    });
}
