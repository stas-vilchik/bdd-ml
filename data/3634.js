{
  _r("get", `/group?keywords=${encodeURIComponent("分组1")}`, token)
    .then(data => {
      data.success.should.be.ok();
      data.data.should.have.length(1);
      return _r("get", "/group?keywords=1", token);
    })
    .then(data => {
      data.success.should.be.ok();
      data.data.should.be.empty();
      done();
    });
}
