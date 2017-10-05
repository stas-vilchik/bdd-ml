{
  if (!_.isArray(docs)) {
    docs = [docs];
  }

  return Promise.all(docs.map(item => exports.updateById(item)));
}
