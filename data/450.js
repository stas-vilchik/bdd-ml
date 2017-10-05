{
  it("should have request method helpers", function() {
    expect(typeof axios.request).toEqual("function");
    expect(typeof axios.get).toEqual("function");
    expect(typeof axios.head).toEqual("function");
    expect(typeof axios.options).toEqual("function");
    expect(typeof axios.delete).toEqual("function");
    expect(typeof axios.post).toEqual("function");
    expect(typeof axios.put).toEqual("function");
    expect(typeof axios.patch).toEqual("function");
  });
  it("should have promise method helpers", function() {
    var promise = axios();
    expect(typeof promise.then).toEqual("function");
    expect(typeof promise.catch).toEqual("function");
  });
  it("should have defaults", function() {
    expect(typeof axios.defaults).toEqual("object");
    expect(typeof axios.defaults.headers).toEqual("object");
  });
  it("should have interceptors", function() {
    expect(typeof axios.interceptors.request).toEqual("object");
    expect(typeof axios.interceptors.response).toEqual("object");
  });
  it("should have all/spread helpers", function() {
    expect(typeof axios.all).toEqual("function");
    expect(typeof axios.spread).toEqual("function");
  });
  it("should have factory method", function() {
    expect(typeof axios.create).toEqual("function");
  });
  it("should have Cancel, CancelToken, and isCancel properties", function() {
    expect(typeof axios.Cancel).toEqual("function");
    expect(typeof axios.CancelToken).toEqual("function");
    expect(typeof axios.isCancel).toEqual("function");
  });
}
