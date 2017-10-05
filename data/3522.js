{
  const uid = this.state.user.id;
  const id = this.checkBody('id').notEmpty().value;

  if (this.errors) {
    this.body = this.util.refail(null, 10001, this.errors);
    return;
  }

  const project = yield projectExistCheck(id, uid);

  if (!project) {
    this.body = this.util.refail('更新失败，无权限');
    return;
  }

  if (!/http(s)?:\/\//.test(project.swagger_url)) {
    this.body = this.util.refail('更新失败，未设置 Swagger');
    return;
  }

  try {
    yield swagger.create(project);
  } catch (err) {
    this.log.error({
      req: this.req,
      err
    }, '  --> %s %s, 基于 Swagger 更新 Mock 发生异常', this.request.method, this.request.originalUrl);
  }

  this.body = this.util.resuccess();
}