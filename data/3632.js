{
  _r("get", "/group", token).then(data => {
    group = data.data[0];
    data.success.should.be.ok();
    data.data.should.have.length(1);
    data.data[0].name.should.eql("分组1");
    done();
  });
}
