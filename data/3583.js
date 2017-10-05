{
  const projectId = item.id;

  const userIds = _.uniq([item.user].concat(item.members));

  return item.user
    ? userIds.map(id => ({
        user: id,
        project: projectId
      }))
    : userGroup
        .find({
          group: item.group
        })
        .then(data =>
          data.map(o => ({
            user: o.user.id,
            project: projectId
          }))
        );
}
