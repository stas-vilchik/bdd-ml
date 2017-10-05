{
  var request = jasmine.Ajax.requests.mostRecent();

  if (request) {
    resolve(request);
  } else {
    attemptGettingAjaxRequest(resolve, reject);
  }
}
