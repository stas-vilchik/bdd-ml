{
  data.success.should.not.be.ok();
  data.message.should.containEql("无权限");
  done();
}
