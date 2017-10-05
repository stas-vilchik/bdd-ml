{
  return UserProjectModel.update(
    {
      _id: doc.id
    },
    {
      $set: {
        is_workbench: doc.is_workbench
      }
    }
  );
}
