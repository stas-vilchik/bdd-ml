{
  it("参数异常", done => {
    login()
      .then(data => support.r("get", "/u?page_index=index", data.data.token))
      .then(data => {
        data.message.should.be.eql("params error");
        done();
      });
  });
  it("搜索", done => {
    login()
      .then(data => support.r("get", "/u?keywords=hhhh", data.data.token))
      .then(data => {
        data.success.should.be.ok();
        done();
      });
  });
  it("查询用户列表", done => {
    login()
      .then(data => support.r("get", "/u", data.data.token))
      .then(data => {
        data.success.should.be.ok();
        data.data.should.have.length(0);
        done();
      });
  });
}
