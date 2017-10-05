{
  support.r("get", "/realtime", user.token).then(data => {
    data.success.should.be.ok();
    done();
  });
}
