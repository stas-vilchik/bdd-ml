{
  expect(resolveSpy).not.toHaveBeenCalled();
  expect(rejectSpy).toHaveBeenCalled();
  var reason = rejectSpy.calls.first().args[0];
  expect(reason instanceof Error).toBe(true);
  expect(reason.message).toBe("Request failed with status code 500");
  expect(reason.config.method).toBe("get");
  expect(reason.config.url).toBe("/foo");
  expect(reason.response.status).toBe(500);
  done();
}
