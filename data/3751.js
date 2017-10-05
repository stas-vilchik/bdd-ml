{
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
}
