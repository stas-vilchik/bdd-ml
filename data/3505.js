{
  const mode = this.checkBody('mode').notEmpty().value;
  const projectId = this.checkBody('project_id').notEmpty().value;
  const description = this.checkBody('description').notEmpty().value;
  const url = this.checkBody('url').notEmpty().match(/^\/.*$/i, 'URL 必须以 / 开头').value;
  const method = this.checkBody('method').notEmpty().toLow().in(['get', 'post', 'put', 'delete', 'patch']).value;

  if (this.errors) {
    this.body = this.util.refail(null, 10001, this.errors);
    return;
  }

  const project = yield projectExistCheck(projectId, this.state.user.id);

  if (!project) {
    this.body = this.util.refail('创建失败，无权限');
    return;
  }

  const mock = yield mockProxy.findOne({
    project: projectId,
    url,
    method
  });

  if (mock) {
    this.body = this.util.refail('创建失败，已存在相同 Mock');
    return;
  }

  yield mockProxy.newAndSave({
    project: projectId,
    description,
    method,
    url,
    mode
  });
  this.body = this.util.resuccess();
}