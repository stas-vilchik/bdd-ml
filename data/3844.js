{
  p.Mock
    .delByIds([mock._id], user._id)
    .then(() => p.Mock.getById(mock._id))
    .then(data => {
      should.not.exist(data);
      done();
    });
}
