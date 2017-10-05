{
  support.r("get", "/project?type=workbench", user.token).then(data => {
    data.success.should.be.ok();
    data.data.should.have.length(0);
    done();
  });
}
