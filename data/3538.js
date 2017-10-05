{
  const name = this.checkBody('name').notEmpty().len(4, 20).value;
  const password = this.checkBody('password').notEmpty().len(6, 20).value;

  if (this.errors) {
    this.body = this.util.refail(null, 10001, this.errors);
    return;
  }

  let user = yield userProxy.getByName(name);

  if (!_.isEmpty(user)) {
    this.body = this.util.refail('注册失败，该用户已存在');
    return;
  }

  const npassword = yield util.bhash(password);
  yield userProxy.newAndSave(name, npassword);
  user = yield userProxy.getByName(name);
  yield mock.createExample(user.id);
  this.body = this.util.resuccess();
}