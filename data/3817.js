{
  login()
    .then(data => support.r("get", "/u", data.data.token))
    .then(data => {
      data.success.should.be.ok();
      data.data.should.have.length(0);
      done();
    });
}
