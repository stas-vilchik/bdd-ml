{
  const data =
    projects.length > 0
      ? userProjectProxy.newAndSave(
          projects.map(o => ({
            user: doc.user,
            project: o.id
          }))
        )
      : [];
  return data;
}
