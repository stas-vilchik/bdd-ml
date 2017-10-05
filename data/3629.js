{
  _r("post", "/group/create", token, {
    name: "分组1"
  }).then(data => {
    data.message.should.containEql("相同");
    done();
  });
}
