{
  const groupId = this.checkParams('groupId').value;
  const swaggerUrl = this.checkBody('url').notEmpty().isUrl().value;

  if (this.errors) {
    this.body = this.util.refail(null, 10001, this.errors);
    return;
  }

  const swaggerInfo = yield swagger.getSwaggerInfo({
    url: swaggerUrl
  });

  if (!swaggerInfo) {
    this.body = this.util.refail('创建失败，无法获取项目信息，请检查 url 是否正确');
    return;
  }

  if (!swaggerInfo.info.title) {
    this.body = this.util.refail('创建失败，无法获取项目名，请检查配置是否正确');
    return;
  }

  const name = swaggerInfo.info.title;
  const description = swaggerInfo.info.description || name;
  const projectUrl = `/${_.now()}`;
  let project = yield projectProxy.findOne({
    group: groupId,
    $or: [{
      name
    }, {
      url: projectUrl
    }]
  });

  if (!project) {
    project = yield projectProxy.newAndSave({
      name,
      description,
      url: projectUrl,
      group: groupId,
      swagger_url: swaggerUrl
    });
    project = project[0];
  }

  try {
    yield swagger.create(project);
  } catch (err) {
    this.log.error({
      req: this.req,
      err
    }, '  --> %s %s, 基于 Swagger 创建或更新 Mock 发生异常', this.request.method, this.request.originalUrl);
  }

  this.body = this.util.resuccess();
}