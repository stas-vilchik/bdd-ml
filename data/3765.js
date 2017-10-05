{
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
}
