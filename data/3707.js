{
  getMock()
    .then(data =>
      support.r("post", "/mock/update", user.token, {
        id: data.mocks[0]._id,
        url: "/proxy2"
      })
    )
    .then(data => {
      data.success.should.be.ok();
      done();
    });
}
