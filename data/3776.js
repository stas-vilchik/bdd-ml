{
  getProject()
    .then(data =>
      support.r("post", "/project/copy", user.token, {
        id: data.data[1]._id
      })
    )
    .then(data => {
      data.success.should.be.ok();
      done();
    });
}
