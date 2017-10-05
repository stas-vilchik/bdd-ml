{
  return UserGroupModel.find(query, {}).populate("user group");
}
