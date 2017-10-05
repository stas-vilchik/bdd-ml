{
  var data = "";
  data = transformData(data, null, [
    function(data) {
      data += "f";
      return data;
    },
    function(data) {
      data += "o";
      return data;
    },
    function(data) {
      data += "o";
      return data;
    }
  ]);
  expect(data).toEqual("foo");
}
