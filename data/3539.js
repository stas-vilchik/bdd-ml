{
  const url = this.checkQuery('url').notEmpty().isUrl().value;

  if (this.errors) {
    this.body = this.util.refail(null, 10001, this.errors);
    return;
  }

  const data = yield axios.get(url).then(res => res.data);
  this.body = data;
}