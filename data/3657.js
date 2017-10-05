{
  _r("post", "/group/delete", token, {
    id: group._id
  }).then(data => {
    data.success.should.not.be.ok();
    data.message.should.containEql("删除团队下所有的项目");
    done();
  });
}
