{
  p.Project
    .newAndSave({
      user: user._id,
      name: projectName,
      url: projectUrl
    })
    .then(data => {
      project = data[0];
      project.name.should.eql(projectName);
      project.url.should.eql(projectUrl);
      project.members.should.have.length(0);
      done();
    });
}
