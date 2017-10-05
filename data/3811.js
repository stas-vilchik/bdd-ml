{
  login()
    .then(data => support.r("get", "/u?page_index=index", data.data.token))
    .then(data => {
      data.message.should.be.eql("params error");
      done();
    });
}
