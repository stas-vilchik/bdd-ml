{
  p.User
    .getByName(name)
    .then(data => p.User.getById(data._id))
    .then(done());
}
