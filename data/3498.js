{
  const uid = this.state.user.id;
  const id = this.checkBody('id').notEmpty('团队不存在').value;

  if (this.errors) {
    this.body = this.util.refail(null, 10001, this.errors);
    return;
  }

  yield userGroupProxy.newAndSave({
    user: uid,
    group: id
  });
  this.body = this.util.resuccess();
}