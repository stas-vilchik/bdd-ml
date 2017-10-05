{
  return mock
    .del({
      project: projectId
    })
    .then(() => userProject.delByProjectId(projectId))
    .then(() =>
      ProjectModel.remove({
        _id: projectId
      })
    );
}
