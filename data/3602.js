{
  const UserGroup = new UserGroupModel(doc);
  return UserGroupModel.findOne(doc)
    .then(data => data || UserGroup.save())
    .then(() =>
      ProjectModel.find({
        group: doc.group
      })
    )
    .then(projects => {
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
    });
}
