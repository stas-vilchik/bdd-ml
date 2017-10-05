{
  it("创建mock", done => {
    create()
      .then(data => {
        data.success.should.be.ok();
        return create();
      })
      .then(data => {
        data.success.should.not.be.ok();
        data.message.should.containEql("相同");
        done();
      });
  });
  it("无权限", done => {
    create({}, user3.token).then(data => {
      data.success.should.not.be.ok();
      data.message.should.containEql("无权限");
      done();
    });
  });
}
