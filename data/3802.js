{
  it("参数异常", done => {
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
  });
  it("修改资料", done => {
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
  });
}
