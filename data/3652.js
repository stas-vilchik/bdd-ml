{
  it("无参", done => {
    _r("post", "/group/delete", token).then(data => {
      data.message.should.be.eql("params error");
      done();
    });
  });
  it("退出团队", done => {
    _r("post", "/group/delete", token2, {
      id: group._id
    }).then(data => {
      data.success.should.be.ok();
      done();
    });
  });
  it("存在项目，禁止删除", done => {
    _r("post", "/group/delete", token, {
      id: group._id
    }).then(data => {
      data.success.should.not.be.ok();
      data.message.should.containEql("删除团队下所有的项目");
      done();
    });
  });
  it("删除", done => {
    projectProxy
      .findOne({
        group: group._id
      })
      .then(project => projectProxy.delById(project.id))
      .then(() =>
        _r("post", "/group/delete", token, {
          id: group._id
        })
      )
      .then(data => {
        data.success.should.be.ok();
        done();
      });
  });
}
