{
  it("无参", done => {
    support.r("post", "/u/login").then(data => {
      data.message.should.be.eql("params error");
      done();
    });
  });
  it("用户不存在", done => {
    support
      .r("post", "/u/login", "", {
        name: "hhhh2",
        password: "123456"
      })
      .then(data => {
        data.message.should.be.eql("用户不存在");
        done();
      });
  });
  it("密码错误", done => {
    support
      .r("post", "/u/login", "", {
        name: "hhhh",
        password: "1234567"
      })
      .then(data => {
        data.message.should.be.eql("请检查密码是否正确");
        done();
      });
  });
  it("登录", done => {
    login().then(data => {
      data.success.should.be.ok();
      data.data.should.not.have.enumerable("password");
      done();
    });
  });
}
