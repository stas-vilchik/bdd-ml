{
  p.MockCount
    .newAndSave(mock._id)
    .then(data => {
      data.count.should.be.exactly(1);
      return p.MockCount.newAndSave(mock._id);
    })
    .then(() => p.MockCount.newAndSave(mock._id))
    .then(data => {
      data.count.should.be.exactly(3);
      done();
    });
}
