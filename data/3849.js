{
  support.createUser().then(data => {
    user = data;
    done();
  });
}
