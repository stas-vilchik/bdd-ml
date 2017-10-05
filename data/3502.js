{
  const projectId = this.checkQuery('project_id').notEmpty().value;
  const pageSize = this.checkQuery('page_size').empty().toInt().gt(0).default(config.get('pageSize')).value;
  const pageIndex = this.checkQuery('page_index').empty().toInt().gt(0).default(1).value;
  const keywords = this.checkQuery('keywords').value;

  if (this.errors) {
    this.body = this.util.refail(null, 10001, this.errors);
    return;
  }

  const opt = {
    skip: (pageIndex - 1) * pageSize,
    limit: pageSize,
    sort: '-create_at'
  };
  const where = {
    project: projectId
  };

  if (keywords) {
    const keyExp = new RegExp(keywords);
    where.$or = [{
      url: keyExp
    }, {
      description: keyExp
    }, {
      method: keyExp
    }, {
      mode: keyExp
    }];
  }

  let mocks = yield mockProxy.find(where, opt);
  let project = yield projectProxy.getById(projectId);
  project.members = project.members.map(o => _.pick(o, ft.user));
  project.extend = _.pick(project.extend, ft.projectExtend);
  project.group = _.pick(project.group, ft.group);
  project.user = _.pick(project.user, ft.user);
  project = _.pick(project, ['user'].concat(ft.project));
  mocks = mocks.map(o => _.pick(o, ft.mock));
  this.body = this.util.resuccess({
    project,
    mocks
  });
}