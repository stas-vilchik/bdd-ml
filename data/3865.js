{
  userProjectProxy
    .findOne({
      user: user._id,
      project: project._id
    })
    .then(data => {
      userProject = data;
      userProject.is_workbench = true;
      return userProjectProxy.updateWorkbench(userProject);
    })
    .then(() =>
      userProjectProxy.findOne({
        user: user._id,
        project: project._id
      })
    )
    .then(data => {
      data.is_workbench.should.be.ok();
      done();
    });
}
