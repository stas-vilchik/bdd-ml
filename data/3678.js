{
  it("获取列表", done => {
    getMock().then(data => {
      data.mocks.should.have.length(6);
      data.project.members.should.have.length(0);
      done();
    });
  });
  it("搜索", done => {
    getMock(null, "keywords=/proxy").then(data => {
      data.mocks.should.have.length(1);
      done();
    });
  });
}
