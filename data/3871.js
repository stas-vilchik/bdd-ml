{
  util.bhash(password).then(pass => {
    p.User.newAndSave(name, pass, "nic").then(data => {
      user = data;
      user.name.should.eql(name);
      user.password.should.eql(pass);
      done();
    });
  });
}
