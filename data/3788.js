{
  support.r("post", "/u/register").then(data => {
    data.message.should.be.eql("params error");
    done();
  });
}
