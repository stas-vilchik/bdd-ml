{
  return ProjectModel.find({
    _id: {
      $in: ids
    }
  }).populate("user members group");
}
