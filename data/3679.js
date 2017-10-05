{
  getMock().then(data => {
    data.mocks.should.have.length(6);
    data.project.members.should.have.length(0);
    done();
  });
}
