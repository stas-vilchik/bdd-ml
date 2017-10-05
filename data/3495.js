{
  const uid = this.state.user.id;
  const keywords = this.checkQuery('keywords').value;
  let groups;

  if (keywords) {
    groups = yield groupProxy.find({
      name: keywords
    });
    groups = groups.map(o => _.pick(o, ft.group));
  } else {
    groups = yield userGroupProxy.find({
      user: uid
    });
    groups = groups.map(o => _.pick(o.group, ft.group));
  }

  this.body = this.util.resuccess(groups);
}