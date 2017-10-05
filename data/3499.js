{
  const uid = this.state.user.id;
  const id = this.checkBody('id').notEmpty().value;

  if (this.errors) {
    this.body = this.util.refail(null, 10001, this.errors);
    return;
  }

  const group = yield groupProxy.findOne({
    _id: id,
    user: uid
  });
  const projects = yield Project.find({
    group: id
  });
  const projectIds = projects.map(o => o.id);

  if (group) {
    if (projects.length > 0) {
      this.body = this.util.refail('删除失败，请先删除团队下所有的项目');
      return;
    }

    yield groupProxy.del({
      _id: id
    });
    yield userGroupProxy.del({
      group: id
    });
  } else {
    yield userGroupProxy.del({
      user: uid,
      group: id
    });
    yield userProjectProxy.del({
      user: uid,
      project: {
        $in: projectIds
      }
    });
  }

  this.body = this.util.resuccess();
}