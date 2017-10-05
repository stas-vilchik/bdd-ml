{
  register()
    .then(data => {
      data.success.should.be.ok();
      return register();
    })
    .then(data => {
      data.success.should.not.be.ok();
      done();
    });
}
