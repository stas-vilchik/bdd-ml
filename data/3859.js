{
  p.Project
    .delById(project._id)
    .then(() => p.Project.find())
    .then(data => {
      data.should.have.length(1);
      data[0].url.should.eql("/example");
      done();
    });
}
