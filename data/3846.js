{
  p.Mock.find().then(data => {
    data.should.have.length(6);
    should.exist(data[0].project);
    should.exist(data[0].project.user);
    done();
  });
}
