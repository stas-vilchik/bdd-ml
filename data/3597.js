{
  return ProjectModel.findOne(query, {}, opt).populate("user members group");
}
