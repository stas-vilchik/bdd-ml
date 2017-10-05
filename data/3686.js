{
  it("导出 Mock", done => {
    getMock()
      .then(data => {
        const mocks = data.mocks;
        return support.r("post", "/mock/export", user.token, {
          ids: [mocks[0]._id]
        });
      })
      .then(done());
  });
  it("Mock 不存在", done => {
    getMock()
      .then(() =>
        support.r("post", "/mock/export", user.token, {
          ids: ["5873600ce94ce07e02cdac29"]
        })
      )
      .then(data => {
        data.success.should.not.be.ok();
        data.message.should.containEql("不存在");
        done();
      });
  });
}
