{
  const group = new GroupModel(docs);
  return group.save().then(data =>
    userGroup.newAndSave({
      user: data.user,
      group: data.id
    })
  );
}
