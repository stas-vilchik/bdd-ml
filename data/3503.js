{
  let projectIds = this.checkQuery('project_ids').notEmpty().value;

  if (this.errors) {
    this.body = this.util.refail(null, 10001, this.errors);
    return;
  }

  projectIds = projectIds.split(',');
  const mocks = yield mockProxy.find({
    project: {
      $in: projectIds
    }
  });
  const projects = yield projectProxy.findByIds(projectIds);
  const result = {};
  projects.forEach(project => {
    const projectId = project.id;
    let newMocks = mocks.filter(o => o.project.id === projectId);
    let newProject = projects.filter(o => o.id === projectId)[0];
    newProject.members = newProject.members.map(o => _.pick(o, ft.user));
    newProject.user = _.pick(newProject.user, ft.user);
    newProject = _.pick(newProject, ['user'].concat(ft.project));
    newMocks = newMocks.map(o => _.pick(o, ft.mock));
    result[projectId] = {
      project: newProject,
      mocks: newMocks
    };
  });
  this.body = this.util.resuccess(result);
}