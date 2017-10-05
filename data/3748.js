{
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
}
