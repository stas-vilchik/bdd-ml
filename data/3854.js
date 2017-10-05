{
  project.name = "hh";
  p.Project
    .updateById(project)
    .then(data => {
      data.n.should.be.exactly(1);
      return p.Project.getById(project._id);
    })
    .then(data => {
      data.name.should.eql(project.name);
      done();
    });
}
