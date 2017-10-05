{
  const mockFile = mockFiles.get(file);

  try {
    const json = JSON.parse(mockFile);
    return Promise.resolve(json);
  } catch (err) {
    return Promise.reject(`${file} is not valid JSON.`);
  }
}
