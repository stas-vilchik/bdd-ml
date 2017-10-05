{
  login().then(data => {
    data.success.should.be.ok();
    data.data.should.not.have.enumerable("password");
    done();
  });
}
