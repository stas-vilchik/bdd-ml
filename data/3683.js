{
  it("获取列表", done => {
    const ids = [projects[0]._id, projects[1]._id].join(",");
    support.r("get", `/mock/by_projects?project_ids=${ids}`).then(data => {
      data.success.should.be.ok();
      data.data.should.have.size(2);
      done();
    });
  });
}
