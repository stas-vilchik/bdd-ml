{
  const password = this.checkBody('password').empty().len(6, 20).value;
  const nickName = this.checkBody('nick_name').empty().len(2, 20).value;
  const headImg = this.checkBody('head_img').empty().value;

  if (this.errors) {
    this.body = this.util.refail(null, 10001, this.errors);
    return;
  }

  const user = yield userProxy.getById(this.state.user.id);
  user.nick_name = nickName || user.nick_name;
  user.head_img = headImg || user.head_img;
  user.password = password ? yield util.bhash(password) : user.password;
  yield userProxy.update(user);
  this.body = this.util.resuccess();
}