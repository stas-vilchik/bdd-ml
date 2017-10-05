{
  it("404", done => {
    support.m("get", `/${user.name}${project.url}`).catch(() => done());
  });
  it("普通类型 Mock", done => {
    support.m("get", `/${user.name}${project.url}/mock`).then(data => {
      data.success.should.be.ok();
      done();
    });
  });
  it("代理类型 Mock", done => {
    support.m("get", `/${user.name}${project.url}/proxy`).then(done());
  });
}
