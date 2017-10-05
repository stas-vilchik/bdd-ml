{
  const ids = this.checkBody('ids').empty().type('array').value;
  const projectId = this.checkBody('project_id').empty().value;
  let mocks;

  if (this.errors) {
    this.body = this.util.refail(null, 10001, this.errors);
    return;
  }

  if (projectId) {
    mocks = yield mockProxy.find({
      project: projectId
    });
  } else if (!_.isEmpty(ids)) {
    mocks = yield mockProxy.find({
      _id: {
        $in: ids
      }
    });
  } else {
    this.body = this.util.refail('参数不能为空');
    return;
  }

  if (_.isEmpty(mocks)) {
    this.body = this.util.refail('Mock 不存在');
    return;
  }

  this.set('Content-disposition', 'attachment; filename=Easy-Mock-API.zip');
  const zip = new JSZip();
  mocks.forEach(mock => {
    let data;

    try {
      data = JSON.parse(mock.mode);
      data = JSON.stringify(Mock.mock(data));
    } catch (e) {
      data = mock.mode;
    } finally {
      zip.file(`${mock.project.url}${mock.url}.json`, data);
    }
  });
  const content = yield zip.generateAsync({
    type: 'nodebuffer'
  });
  this.body = content;
}