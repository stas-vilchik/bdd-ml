{
  _r("post", "/group/update", token, {
    id: group._id,
    name: "分组2"
  }).then(data => {
    data.success.should.be.ok();
    done();
  });
}
