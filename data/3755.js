{
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
}
