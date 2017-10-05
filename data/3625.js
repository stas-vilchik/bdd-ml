{
  _r("post", "/group/create", token).then(data => {
    data.message.should.be.eql("params error");
    done();
  });
}
