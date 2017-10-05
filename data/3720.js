{
  it("无参", done => {
    support.r("post", "/project/create", user.token).then(data => {
      data.message.should.be.eql("params error");
      done();
    });
  });
  it("创建项目", done => {
    create()
      .then(data => {
        data.success.should.be.ok();
        return create();
      })
      .then(data => {
        data.success.should.not.be.ok();
        done();
      });
  });
  it("不允许重复创建", done => {
    create().then(data => {
      data.success.should.be.not.ok();
      data.message.should.containEql("创建失败");
      done();
    });
  });
  it("禁止邀请自己", done => {
    create({
      name: "demo",
      url: "/demo",
      members: [user._id]
    }).then(data => {
      data.success.should.be.not.ok();
      data.message.should.containEql("不能邀请自己哦");
      done();
    });
  });
  it("邀请别人", done => {
    create({
      name: "demo",
      url: "/demo",
      members: [user2._id]
    }).then(data => {
      data.success.should.be.ok();
      done();
    });
  });
}
