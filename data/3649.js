{
  const createProject = support.cp(token);
  createProject({
    group: group._id
  })
    .then(() =>
      _r("post", "/group/join", token2, {
        id: group._id
      })
    )
    .then(data => {
      data.success.should.be.ok();
      done();
    });
}
