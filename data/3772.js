{
  getProject()
    .then(data =>
      support.r("post", "/project/delete", user.token, {
        id: data.data[0]._id
      })
    )
    .then(data => {
      data.success.should.be.ok();
      done();
    });
}
