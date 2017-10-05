{
  const uid = this.state.user.id;
  const id = this.checkBody('id').notEmpty().value;

  if (this.errors) {
    this.body = this.util.refail(null, 10001, this.errors);
    return;
  }

  const project = yield projectExistCheck(id, uid);

  if (!project) {
    this.body = this.util.refail('删除失败，无权限');
    return;
  } else if (project.group && project.group.user.toString() !== uid) {
    this.body = this.util.refail('删除失败，非团队创建者无法删除项目');
    return;
  }

  yield projectProxy.delById(id);
  this.body = this.util.resuccess();
}