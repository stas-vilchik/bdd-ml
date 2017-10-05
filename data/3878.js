{
  user.nick_name = "hh";
  p.User.update(user).then(data => {
    data.n.should.be.exactly(1);
    done();
  });
}
