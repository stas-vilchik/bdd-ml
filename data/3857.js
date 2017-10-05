{
  p.Project
    .find(user._id, {
      user: user._id
    })
    .then(data => {
      data[0].extend.is_workbench.should.not.be.ok();
      data.should.have.length(2);
      done();
    });
}
