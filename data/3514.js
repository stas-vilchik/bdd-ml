{
  return projectProxy
    .findOne({
      _id: id
    })
    .then(project => {
      const members = project.members.map(member => member.id);

      if (
        project.user &&
        (project.user.id === uid || members.indexOf(uid) > -1)
      ) {
        return project;
      } else if (project.group) {
        return project;
      }

      return null;
    });
}
