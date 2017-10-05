{
  data.success.should.be.ok();
  data.data.should.have.length(1);
  return _r("get", "/group?keywords=1", token);
}
