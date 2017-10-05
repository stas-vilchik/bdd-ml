{
  const name = this.checkBody('name').notEmpty().len(4, 20).value;
  const password = this.checkBody('password').notEmpty().len(6, 20).value;

  if (this.errors) {
    this.body = this.util.refail(null, 10001, this.errors);
    return;
  }

  const user = yield userProxy.getByName(name);

  if (_.isEmpty(user)) {
    this.body = this.util.refail('用户不存在');
    return;
  }

  const verifyPassword = yield util.bcompare(password, user.password);

  if (!verifyPassword) {
    this.body = this.util.refail('请检查密码是否正确');
    return;
  }

  let token = yield this.Token.list({
    id: user.id
  });

  if (_.isEmpty(token)) {
    token = [yield this.Token.create({
      id: user.id
    })];
  }

  user.token = token[0].jwt;
  this.body = this.util.resuccess(_.pick(user, ft.user));
}