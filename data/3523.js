{
  const id = this.checkBody('id').notEmpty().value;
  const status = this.checkBody('status').notEmpty().type('boolean').value;

  if (this.errors) {
    this.body = this.util.refail(null, 10001, this.errors);
    return;
  }

  const doc = yield userProjectProxy.findOne({
    _id: id,
    user: this.state.user.id
  });

  if (!doc) {
    this.body = this.util.refail('更新失败，无权限');
    return;
  }

  doc.is_workbench = status;
  yield userProjectProxy.updateWorkbench(doc);
  this.body = this.util.resuccess();
}