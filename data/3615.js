{
  const user = new UserModel();
  const len = config.get("gravatar").length;
  user.name = name;
  user.password = password;
  user.nick_name = nickName || _.now();
  user.head_img = headImg || config.get("gravatar")[_.random(0, len - 1)];
  return user.save();
}
