{
  it("Mock 不存在", done => {
    getMock()
      .then(data =>
        support.r("post", "/mock/delete", user2.token, {
          ids: [data.mocks[0]._id, "5873600ce94ce07e02cdac29"]
        })
      )
      .then(data => {
        data.success.should.not.be.ok();
        done();
      });
  });
  it("删除 Mock", done => {
    getMock()
      .then(data =>
        support.r("post", "/mock/delete", user.token, {
          ids: [data.mocks[0]._id, data.mocks[1]._id]
        })
      )
      .then(data => {
        data.success.should.be.ok();
        done();
      });
  });
}
