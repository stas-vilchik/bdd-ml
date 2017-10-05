{
  login()
    .then(data =>
      support.r("post", "/u/update", data.data.token, {
        nick_name: "qqqq"
      })
    )
    .then(data => {
      data.success.should.be.ok();
      return login();
    })
    .then(data => {
      data.data.nick_name.should.eql("qqqq");
      done();
    });
}
