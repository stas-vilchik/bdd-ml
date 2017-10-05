{
  var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes == 0) return "n/a";
  nFractDigit = nFractDigit !== undefined ? nFractDigit : 0;
  var precision = Math.pow(10, nFractDigit);
  var i = Math.floor(Math.log(bytes) / Math.log(1024));
  return (
    Math.round(bytes * precision / Math.pow(1024, i)) / precision +
    " " +
    sizes[i]
  );
}
