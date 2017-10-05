{
  user = data;
  user.name.should.eql(name);
  user.password.should.eql(pass);
  done();
}
