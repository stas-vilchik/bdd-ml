{
  _r("post", "/group/update", token2, {
    id: group._id,
    name: "分组2"
  }).then(data => {
    data.message.should.be.containEql("无权限");
    done();
  });
}
