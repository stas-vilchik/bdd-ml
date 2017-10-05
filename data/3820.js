{
  it("登出", done => {
    login()
      .then(data => support.r("post", "/u/logout", data.data.token))
      .then(data => {
        data.success.should.be.ok();
        done();
      });
  });
}
