userProject
  .find({
    project: {
      $in: projects.map(item => item.id)
    },
    user: sessionUId
  })
  .then(data =>
    projects.map(project => {
      project.extend = data.filter(
        item => item.project.toString() === project.id
      )[0];
      return project;
    })
  );
