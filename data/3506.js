{
  const uid = this.state.user.id;
  const id = this.checkBody('id').notEmpty().value;
  const mode = this.checkBody('mode').value;
  const description = this.checkBody('description').value;
  const url = this.checkBody('url').empty().match(/^\/.*$/i, 'URL 必须以 / 开头').value;
  const method = this.checkBody('method').empty().toLow().in(['get', 'post', 'put', 'delete', 'patch']).value;

  if (this.errors) {
    this.body = this.util.refail(null, 10001, this.errors);
    return;
  }

  const mock = yield mockProxy.getById(id);

  if (!mock) {
    this.body = this.util.refail('更新失败，Mock 不存在');
    return;
  }

  const project = mock.project;

  if (project.user && project.user.toString() !== uid && project.members.indexOf(uid) === -1) {
    this.body = this.util.refail('更新失败，无权限');
    return;
  }

  mock.url = url || mock.url;
  mock.mode = mode || mock.mode;
  mock.method = method || mock.method;
  mock.description = description || mock.description;
  const existMock = yield mockProxy.findOne({
    _id: {
      $ne: mock.id
    },
    project: project.id,
    url: mock.url,
    method: mock.method
  });

  if (existMock) {
    this.body = this.util.refail('更新失败，已存在相同 Mock');
    return;
  }

  yield mockProxy.updateById(mock);
  this.body = this.util.resuccess();
}