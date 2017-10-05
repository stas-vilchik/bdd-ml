{
  const projectId = project.id;
  let newMocks = mocks.filter(o => o.project.id === projectId);
  let newProject = projects.filter(o => o.id === projectId)[0];
  newProject.members = newProject.members.map(o => _.pick(o, ft.user));
  newProject.user = _.pick(newProject.user, ft.user);
  newProject = _.pick(newProject, ["user"].concat(ft.project));
  newMocks = newMocks.map(o => _.pick(o, ft.mock));
  result[projectId] = {
    project: newProject,
    mocks: newMocks
  };
}
