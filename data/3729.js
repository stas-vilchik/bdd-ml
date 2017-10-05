{
  data.success.should.be.not.ok();
  data.message.should.containEql("不能邀请自己哦");
  done();
}
