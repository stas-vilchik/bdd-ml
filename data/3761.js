{
  it("更新失败", done => {
    getProject()
      .then(data =>
        support.r("post", "/project/update_workbench", user2.token, {
          id: data.data[2]._id,
          status: false
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
        support.r("post", "/project/update_workbench", user.token, {
          id: data.data[2].extend._id,
          status: true
        })
      )
      .then(data => {
        data.success.should.be.ok();
        done();
      });
  });
}
