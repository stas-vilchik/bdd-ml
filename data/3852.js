{
  p.Project.getById(project._id).then(data => {
    data.name.should.eql(projectName);
    done();
  });
}
