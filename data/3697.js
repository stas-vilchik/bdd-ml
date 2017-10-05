{
  it("Mock 不存在", done => {
    getMock()
      .then(() =>
        support.r("post", "/mock/update", user.token, {
          id: "5873600ce94ce07e02cdac29",
          url: "/change"
        })
      )
      .then(data => {
        data.success.should.not.be.ok();
        data.message.should.containEql("不存在");
        done();
      });
  });
  it("无权限", done => {
    getMock()
      .then(data =>
        support.r("post", "/mock/update", user2.token, {
          id: data.mocks[0]._id,
          url: "/change"
        })
      )
      .then(data => {
        data.success.should.not.be.ok();
        data.message.should.containEql("无权限");
        done();
      });
  });
  it("重复", done => {
    getMock()
      .then(data => {
        const mocks = data.mocks;
        const mock = mocks[0];
        const id = mock.url === "/proxy" ? mocks[1]._id : mock._id;
        return support.r("post", "/mock/update", user.token, {
          id,
          url: "/proxy"
        });
      })
      .then(data => {
        data.success.should.not.be.ok();
        data.message.should.containEql("相同");
        done();
      });
  });
  it("更新", done => {
    getMock()
      .then(data =>
        support.r("post", "/mock/update", user.token, {
          id: data.mocks[0]._id,
          url: "/proxy2"
        })
      )
      .then(data => {
        data.success.should.be.ok();
        done();
      });
  });
}
