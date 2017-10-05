{
  _r("post", "/group/create", token, {
    name: "分组1"
  }).then(data => {
    data.success.should.be.ok();
    done();
  });
}
