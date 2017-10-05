{
  return GroupModel.update(
    {
      _id: id
    },
    {
      $set: doc
    }
  );
}
