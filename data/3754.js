{
  it("更新失败", done => {
    getProject()
      .then(data =>
        support.r("post", "/project/update_swagger", user2.token, {
          id: data.data[2]._id
        })
      )
      .then(data => {
        data.success.should.not.be.ok();
        data.message.should.containEql("无权限");
        done();
      });
  });
  it("更新", done => {
    getProject()
      .then(data =>
        support.r("post", "/project/update_swagger", user.token, {
          id: data.data[0]._id
        })
      )
      .then(data => {
        data.success.should.be.ok();
        done();
      });
  });
}
