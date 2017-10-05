{
  getMock()
    .then(data =>
      support.r("post", "/mock/delete", user2.token, {
        ids: [data.mocks[0]._id, "5873600ce94ce07e02cdac29"]
      })
    )
    .then(data => {
      data.success.should.not.be.ok();
      done();
    });
}
