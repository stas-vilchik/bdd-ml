{
  const uid = this.state.user.id;
  const id = this.checkBody('id').notEmpty().value;
  const name = this.checkBody('name').value;
  const description = this.checkBody('description').value;
  const swaggerUrl = this.checkBody('swagger_url').empty().isUrl(null, {
    allow_underscores: true
  }).value;
  const memberIds = this.checkBody('members').empty().type('array').value;
  const url = this.checkBody('url').empty().match(/^\/.*$/i, 'URL 必须以 / 开头').value;

  if (this.errors) {
    this.body = this.util.refail(null, 10001, this.errors);
    return;
  }

  const project = yield projectExistCheck(id, uid);

  if (!project) {
    this.body = this.util.refail('更新失败，无权限');
    return;
  }

  if (project.user && _.includes(memberIds, project.user.id)) {
    this.body = this.util.refail('更新失败，用户未命中，请检查用户 ID');
    return;
  }

  if (memberIds && memberIds.length !== project.members.length) {
    const isAddMember = memberIds.length > project.members.length;

    const diff = _.xor(memberIds, project.members.map(o => o.id));

    if (isAddMember) {
      yield userProjectProxy.newAndSave(diff.map(userId => ({
        user: userId,
        project: project.id
      })));
    } else {
      yield userProjectProxy.del({
        project: project.id,
        user: {
          $in: diff
        }
      });
    }
  }

  project.url = url || project.url;
  project.name = name || project.name;
  project.members = memberIds || project.members;
  project.swagger_url = swaggerUrl || project.swagger_url;
  project.description = description || project.description;
  const existQuery = {
    _id: {
      $ne: project.id
    },
    $or: [{
      url: project.url
    }, {
      name: project.name
    }]
  };

  if (project.group) {
    existQuery.group = project.group.id;
  } else {
    existQuery.user = project.user.id;
  }

  const existProject = yield projectProxy.findOne(existQuery);

  if (existProject) {
    if (existProject.name === project.name) {
      this.body = this.util.refail('更新失败，与现有项目同名');
    } else {
      this.body = this.util.refail('更新失败，与现有项目的 URL 相同');
    }

    return;
  }

  yield projectProxy.updateById(project);
  this.body = this.util.resuccess();
}