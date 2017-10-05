{
  support
    .r("post", "/u/login", "", {
      name: "hhhh",
      password: "1234567"
    })
    .then(data => {
      data.message.should.be.eql("请检查密码是否正确");
      done();
    });
}
