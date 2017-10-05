{
  const pageSize = this.checkQuery('page_size').empty().toInt().gt(0).default(config.get('pageSize')).value;
  const pageIndex = this.checkQuery('page_index').empty().toInt().gt(0).default(1).value;
  const keywords = this.checkQuery('keywords').value;

  if (this.errors) {
    this.body = this.util.refail(null, 10001, this.errors);
    return;
  }

  const opt = {
    skip: (pageIndex - 1) * pageSize,
    limit: pageSize,
    sort: '-create_at'
  };
  const where = {
    _id: {
      $ne: this.state.user.id
    }
  };

  if (keywords) {
    const keyExp = new RegExp(keywords);
    where.$or = [{
      name: keyExp
    }, {
      nick_name: keyExp
    }];
  }

  let users = yield userProxy.find(where, opt);
  users = users.map(user => _.pick(user, ft.user));
  this.body = this.util.resuccess(users);
}