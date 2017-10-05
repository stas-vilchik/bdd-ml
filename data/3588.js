{
  return ProjectModel.findById(projectId)
    .populate("user members group")
    .then(project =>
      userProject
        .findOne({
          project: project.id
        })
        .then(data => {
          project.extend = data;
          return project;
        })
    );
}
