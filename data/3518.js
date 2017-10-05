{
  const uid = this.state.user.id;
  const group = this.checkBody('group').value;
  const name = this.checkBody('name').notEmpty().value;
  const description = this.checkBody('description').value;
  const swaggerUrl = this.checkBody('swagger_url').empty().isUrl(null, {
    allow_underscores: true
  }).value;
  const memberIds = this.checkBody('members').empty().type('array').value;
  const url = this.checkBody('url').notEmpty().match(/^\/.*$/i, 'URL 必须以 / 开头').value;
  const findQuery = {
    $or: [{
      name
    }, {
      url
    }]
  };
  const saveQuery = {
    name,
    url,
    swagger_url: swaggerUrl,
    description: description || name
  };

  if (this.errors) {
    this.body = this.util.refail(null, 10001, this.errors);
    return;
  }

  if (_.includes(memberIds, uid)) {
    this.body = this.util.refail('创建失败，不能邀请自己哦');
    return;
  }

  if (group) {
    findQuery.group = group;
    saveQuery.group = group;
  } else {
    findQuery.user = uid;
    saveQuery.user = uid;
    saveQuery.members = memberIds;
  }

  const project = yield projectProxy.findOne(findQuery);

  if (project) {
    this.body = project.name === name ? this.util.refail('创建失败，与现有项目同名') : this.util.refail('创建失败，与现有项目的 URL 相同');
    return;
  }

  const newProjects = yield projectProxy.newAndSave(saveQuery);

  if (swaggerUrl) {
    try {
      yield swagger.create(newProjects[0]);
    } catch (err) {
      this.log.error({
        req: this.req,
        err
      }, '  --> %s %s, 基于 Swagger 创建 Mock 发生异常', this.request.method, this.request.originalUrl);
    }
  }

  this.body = this.util.resuccess();
}