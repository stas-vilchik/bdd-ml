{
  const uid = this.state.user.id;
  const id = this.checkBody('id').notEmpty().value;

  if (this.errors) {
    this.body = this.util.refail(null, 10001, this.errors);
    return;
  }

  const mocks = yield mockProxy.find({
    project: id
  });

  if (mocks.length === 0) {
    this.body = this.util.refail('创建失败，该项目下无 Mock 数据');
    return;
  }

  const project = mocks[0].project;
  const newUrl = `${project.url}_${_.now()}`;
  const newName = `${project.name}_${_.now()}`;
  yield projectProxy.newAndSave({
    user: uid,
    name: newName,
    url: newUrl,
    description: project.description,
    swagger_url: project.swagger_url
  }).then(projects => mockProxy.newAndSave(mocks.map(item => ({
    project: projects[0].id,
    description: item.description,
    method: item.method,
    url: item.url,
    mode: item.mode
  }))));
  this.body = this.util.resuccess();
}