{
  const project = item.project;

  if (project.group) {
    return false;
  }

  const members = project.members;
  const mockUId = project.user.toString();
  return mockUId !== uid && members.indexOf(uid) === -1;
}
