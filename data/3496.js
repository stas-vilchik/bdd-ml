{
  const name = this.checkBody('name').notEmpty().len(3, 16).value;
  const uid = this.state.user.id;

  if (this.errors) {
    this.body = this.util.refail(null, 10001, this.errors);
    return;
  }

  const doc = yield groupProxy.findByName(name);

  if (doc) {
    this.body = this.util.refail('创建失败，已存在相同团队名');
    return;
  }

  yield groupProxy.newAndSave({
    user: uid,
    name
  });
  this.body = this.util.resuccess();
}