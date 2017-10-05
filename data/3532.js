{
  const project = mock.project;
  const projectId = project.id;

  const exProject = _.find(projects, ["id", projectId]);

  const mockTotal = useCounts.filter(o => o.mock.toString() === mock.id)[0];

  if (exProject && mockTotal && mockTotal.total) {
    exProject.total += mockTotal.total;
  } else if (!exProject) {
    projects.push({
      id: projectId,
      name: project.name,
      description: project.description,
      total: (mockTotal && mockTotal.total) || 0
    });
  }
}
