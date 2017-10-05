{
  support
    .r("post", "/u/login", "", {
      name: "hhhh2",
      password: "123456"
    })
    .then(data => {
      data.message.should.be.eql("用户不存在");
      done();
    });
}
