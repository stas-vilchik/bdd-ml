{
  item.members = item.members.map(item => _.pick(item, ft.user));
  item.extend = _.pick(item.extend, ft.projectExtend);
  item.user = _.pick(item.user, ft.user);
  return _.pick(item, ["user"].concat(ft.project));
}
