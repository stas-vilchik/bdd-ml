{
  projectProxy
    .findOne({
      group: group._id
    })
    .then(project => projectProxy.delById(project.id))
    .then(() =>
      _r("post", "/group/delete", token, {
        id: group._id
      })
    )
    .then(data => {
      data.success.should.be.ok();
      done();
    });
}
