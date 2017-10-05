{
  _r("post", "/group/update", token).then(data => {
    data.message.should.be.eql("params error");
    done();
  });
}
