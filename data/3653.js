{
  _r("post", "/group/delete", token).then(data => {
    data.message.should.be.eql("params error");
    done();
  });
}
