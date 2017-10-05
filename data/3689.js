{
  getMock()
    .then(() =>
      support.r("post", "/mock/export", user.token, {
        ids: ["5873600ce94ce07e02cdac29"]
      })
    )
    .then(data => {
      data.success.should.not.be.ok();
      data.message.should.containEql("不存在");
      done();
    });
}
