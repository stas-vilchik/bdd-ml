{
  _r("post", "/group/join", token).then(data => {
    data.message.should.be.eql("params error");
    done();
  });
}
