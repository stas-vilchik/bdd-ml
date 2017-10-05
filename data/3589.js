userProject
  .findOne({
    project: project.id
  })
  .then(data => {
    project.extend = data;
    return project;
  });
