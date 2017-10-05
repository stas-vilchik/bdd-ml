{
  create()
    .then(data => {
      data.success.should.be.ok();
      return create();
    })
    .then(data => {
      data.success.should.not.be.ok();
      data.message.should.containEql("相同");
      done();
    });
}
