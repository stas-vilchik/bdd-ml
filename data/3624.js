{
  it("无参", done => {
    _r("post", "/group/create", token).then(data => {
      data.message.should.be.eql("params error");
      done();
    });
  });
  it("创建", done => {
    _r("post", "/group/create", token, {
      name: "分组1"
    }).then(data => {
      data.success.should.be.ok();
      done();
    });
  });
  it("重名", done => {
    _r("post", "/group/create", token, {
      name: "分组1"
    }).then(data => {
      data.message.should.containEql("相同");
      done();
    });
  });
}
