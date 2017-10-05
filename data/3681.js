{
  getMock(null, "keywords=/proxy").then(data => {
    data.mocks.should.have.length(1);
    done();
  });
}
