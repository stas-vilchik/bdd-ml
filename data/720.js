{
  jasmine.Ajax.uninstall();
  var resolveSpy = jasmine.createSpy("resolve");
  var rejectSpy = jasmine.createSpy("reject");

  var finish = function() {
    expect(resolveSpy).not.toHaveBeenCalled();
    expect(rejectSpy).toHaveBeenCalled();
    var reason = rejectSpy.calls.first().args[0];
    expect(reason instanceof Error).toBe(true);
    expect(reason.config.method).toBe("get");
    expect(reason.config.url).toBe("http://thisisnotaserver/foo");
    expect(reason.request).toEqual(jasmine.any(XMLHttpRequest));
    jasmine.Ajax.install();
    done();
  };

  axios("http://thisisnotaserver/foo")
    .then(resolveSpy, rejectSpy)
    .then(finish, finish);
}
