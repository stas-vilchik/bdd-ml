{
  getProject()
    .then(data =>
      support.r("post", "/project/update", user.token, {
        id: data.data[0]._id,
        url: "/ttt"
      })
    )
    .then(() => getProject())
    .then(data => {
      data.data[0].url.should.eql("/ttt");
      done();
    });
}
