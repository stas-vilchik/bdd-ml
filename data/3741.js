{
  it("更新项目", done => {
    getProject()
      .then(data =>
        support.r("post", "/project/update", user.token, {
          id: data.data[0]._id,
          url: "/ttt"
        })
      )
      .then(() => getProject())
      .then(data => {
        data.data[0].url.should.eql("/ttt");
        done();
      });
  });
  it("无权限", done => {
    getProject()
      .then(data =>
        support.r("post", "/project/update", user2.token, {
          id: data.data[2]._id,
          url: "/example"
        })
      )
      .then(data => {
        data.success.should.not.be.ok();
        data.message.should.containEql("无权限");
        done();
      });
  });
  it("禁止邀请自己", done => {
    getProject()
      .then(data =>
        support.r("post", "/project/update", user.token, {
          id: data.data[0]._id,
          members: [user._id]
        })
      )
      .then(data => {
        data.success.should.not.be.ok();
        data.message.should.containEql("用户未命中");
        done();
      });
  });
  it("禁止更新重复项目", done => {
    getProject()
      .then(data =>
        support.r("post", "/project/update", user.token, {
          id: data.data[0]._id,
          url: "/example"
        })
      )
      .then(data => {
        data.success.should.not.be.ok();
        data.message.should.containEql("相同");
        done();
      });
  });
}
