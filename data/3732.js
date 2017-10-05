{
  it("参数异常", done => {
    support.r("get", "/project?page_index=index", user.token).then(data => {
      data.message.should.be.eql("params error");
      done();
    });
  });
  it("获取项目", done => {
    getProject().then(data => {
      data.success.should.be.ok();
      data.data.should.have.length(3);
      data.data[0].should.have.property("members");
      done();
    });
  });
  it("获取工作台中的项目", done => {
    support.r("get", "/project?type=workbench", user.token).then(data => {
      data.success.should.be.ok();
      data.data.should.have.length(0);
      done();
    });
  });
  it("搜索", done => {
    support.r("get", "/project?keywords=example", user.token).then(data => {
      data.success.should.be.ok();
      data.data.should.have.length(1);
      done();
    });
  });
}
