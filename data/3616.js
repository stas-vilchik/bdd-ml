{
  return UserModel.update(
    {
      _id: user.id
    },
    {
      $set: {
        nick_name: user.nick_name,
        head_img: user.head_img,
        password: user.password
      }
    }
  );
}
