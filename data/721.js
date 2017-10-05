{
  expect(resolveSpy).not.toHaveBeenCalled();
  expect(rejectSpy).toHaveBeenCalled();
  var reason = rejectSpy.calls.first().args[0];
  expect(reason instanceof Error).toBe(true);
  expect(reason.config.method).toBe("get");
  expect(reason.config.url).toBe("http://thisisnotaserver/foo");
  expect(reason.request).toEqual(jasmine.any(XMLHttpRequest));
  jasmine.Ajax.install();
  done();
}
