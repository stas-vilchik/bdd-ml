{
  yield 1;
  var j = 0;

  label1: for (var i = 0; i < 3; i++) {
    x += 'i:' + i;
    x += 'j:' + j;
    if (j++ > 4) return;
    continue label1;
    x += 'x';
  }
}