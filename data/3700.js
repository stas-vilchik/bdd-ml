{
  data.success.should.not.be.ok();
  data.message.should.containEql("不存在");
  done();
}
