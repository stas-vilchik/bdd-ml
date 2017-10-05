{
  getMock()
    .then(() =>
      support.r("post", "/mock/update", user.token, {
        id: "5873600ce94ce07e02cdac29",
        url: "/change"
      })
    )
    .then(data => {
      data.success.should.not.be.ok();
      data.message.should.containEql("不存在");
      done();
    });
}
