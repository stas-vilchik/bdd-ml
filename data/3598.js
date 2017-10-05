{
  return ProjectModel.update(
    {
      _id: project.id
    },
    {
      $set: {
        url: project.url,
        name: project.name,
        members: project.members,
        description: project.description,
        swagger_url: project.swagger_url
      }
    }
  );
}
