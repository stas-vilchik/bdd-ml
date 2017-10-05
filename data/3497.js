{
  const uid = this.state.user.id;
  const id = this.checkBody('id').notEmpty().value;
  const name = this.checkBody('name').notEmpty().len(3, 16).value;

  if (this.errors) {
    this.body = this.util.refail(null, 10001, this.errors);
    return;
  }

  let doc = yield groupProxy.findOne({
    _id: id,
    user: uid
  });

  if (!doc) {
    this.body = this.util.refail('更新失败，无权限');
    return;
  }

  doc = yield groupProxy.findByName(name);

  if (doc) {
    this.body = this.util.refail('更新失败，已存在相同团队名');
    return;
  }

  yield groupProxy.updateById(id, {
    name
  });
  this.body = this.util.resuccess();
}