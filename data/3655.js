{
  _r("post", "/group/delete", token2, {
    id: group._id
  }).then(data => {
    data.success.should.be.ok();
    done();
  });
}
