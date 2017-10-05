{
  support.r("post", "/u/login").then(data => {
    data.message.should.be.eql("params error");
    done();
  });
}
