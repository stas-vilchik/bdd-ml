{
  const s = Date.now();
  const context = {
    url: this.url
  };

  const handleError = err => {
    if (err.code === 404) {
      this.status = 404;
      this.body = '404 | Page Not Found';
    } else if (err.code === 401) {
      this.status = 302;
      this.redirect('/login');
    } else {
      this.status = 500;
      this.body = '500 | Internal Server Error';
      this.log.error(`error during render : ${this.url}`);
      this.log.error(err.stack);
    }
  };

  this.type = 'html';
  cookie.setRawCookie(this.header.cookie);

  try {
    this.body = yield getHTML(context, s);
  } catch (error) {
    handleError(error);
  }
}