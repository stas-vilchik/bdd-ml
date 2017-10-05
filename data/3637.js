{
  it("无参", done => {
    _r("post", "/group/update", token).then(data => {
      data.message.should.be.eql("params error");
      done();
    });
  });
  it("无权限", done => {
    _r("post", "/group/update", token2, {
      id: group._id,
      name: "分组2"
    }).then(data => {
      data.message.should.be.containEql("无权限");
      done();
    });
  });
  it("更新", done => {
    _r("post", "/group/update", token, {
      id: group._id,
      name: "分组2"
    }).then(data => {
      data.success.should.be.ok();
      done();
    });
  });
  it("重名", done => {
    _r("post", "/group/update", token, {
      id: group._id,
      name: "分组2"
    }).then(data => {
      data.success.should.not.be.ok();
      data.message.should.containEql("相同");
      done();
    });
  });
}
