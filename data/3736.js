{
  data.success.should.be.ok();
  data.data.should.have.length(3);
  data.data[0].should.have.property("members");
  done();
}
