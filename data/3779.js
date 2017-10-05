{
  let user;
  before(done => {
    support.createUser().then(data => {
      user = data;
      done();
    });
  });
  after(() => support.cleanCollections());
  describe("#list", () => {
    it("获取数据", done => {
      support.r("get", "/realtime", user.token).then(data => {
        data.success.should.be.ok();
        done();
      });
    });
  });
}
