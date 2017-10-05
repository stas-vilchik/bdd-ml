{
  let data;

  try {
    data = JSON.parse(mock.mode);
    data = JSON.stringify(Mock.mock(data));
  } catch (e) {
    data = mock.mode;
  } finally {
    zip.file(`${mock.project.url}${mock.url}.json`, data);
  }
}
