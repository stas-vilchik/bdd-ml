{
  it("获取列表", done => {
    _r("get", "/group", token).then(data => {
      group = data.data[0];
      data.success.should.be.ok();
      data.data.should.have.length(1);
      data.data[0].name.should.eql("分组1");
      done();
    });
  });
  it("搜索", done => {
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
  });
}
