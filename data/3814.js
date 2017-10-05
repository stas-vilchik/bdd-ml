{
  login()
    .then(data => support.r("get", "/u?keywords=hhhh", data.data.token))
    .then(data => {
      data.success.should.be.ok();
      done();
    });
}
