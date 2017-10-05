{
  support.r("get", "/proxy").then(data => {
    data.message.should.be.eql("params error");
    done();
  });
}
