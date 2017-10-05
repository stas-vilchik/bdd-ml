{
  user = data;
  return p.Project.newAndSave({
    user: user._id,
    name: "pro"
  });
}
