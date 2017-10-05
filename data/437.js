{
  var delay = attempts * attempts * ATTEMPT_DELAY_FACTOR;

  if (attempts++ > MAX_ATTEMPTS) {
    reject(new Error("No request was found"));
    return;
  }

  setTimeout(function() {
    var request = jasmine.Ajax.requests.mostRecent();

    if (request) {
      resolve(request);
    } else {
      attemptGettingAjaxRequest(resolve, reject);
    }
  }, delay);
}
