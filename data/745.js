{
  if (isOldIE && typeof Int8Array === "undefined") {
    done();
    return;
  }

  var input = new Int8Array(2);
  input[0] = 1;
  input[1] = 2;
  axios.post("/foo", input);
  getAjaxRequest().then(function(request) {
    var output = new Int8Array(request.params);
    expect(output.length).toEqual(2);
    expect(output[0]).toEqual(1);
    expect(output[1]).toEqual(2);
    done();
  });
}
