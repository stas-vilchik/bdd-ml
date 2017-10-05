{
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
}
