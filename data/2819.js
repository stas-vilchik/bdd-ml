{
  var n = list.length;

  if (n == 0) {
    return null;
  }

  var i = Math.floor(n / 2);
  return new Tree(list[i], tree(list.slice(0, i)), tree(list.slice(i + 1)));
}
