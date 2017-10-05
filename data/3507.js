{
  const ids = this.checkBody('ids').empty().type('array').value;
  const uid = this.state.user.id;

  if (this.errors) {
    this.body = this.util.refail(null, 10001, this.errors);
    return;
  }

  const mocks = yield mockProxy.find({
    _id: {
      $in: ids
    }
  });
  const unMatchMock = mocks.filter(item => {
    const project = item.project;

    if (project.group) {
      return false;
    }

    const members = project.members;
    const mockUId = project.user.toString();
    return mockUId !== uid && members.indexOf(uid) === -1;
  });

  if (!_.isEmpty(unMatchMock) || mocks.length < ids.length) {
    this.body = this.util.refail('删除失败，无权限');
    return;
  }

  yield mockProxy.delByIds(ids);
  this.body = this.util.resuccess();
}