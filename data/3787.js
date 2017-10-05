{
  it("无参", done => {
    support.r("post", "/u/register").then(data => {
      data.message.should.be.eql("params error");
      done();
    });
  });
  it("注册用户", done => {
    register()
      .then(data => {
        data.success.should.be.ok();
        return register();
      })
      .then(data => {
        data.success.should.not.be.ok();
        done();
      });
  });
}
