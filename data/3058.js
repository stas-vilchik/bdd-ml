{
  if (n == null) n = array.length;
  if (n === 1) return void f(array);

  for (var i = 0; i < n - 1; ++i) {
    permute(array, f, n - 1);
    swap(array, n & 1 ? 0 : i, n - 1);
  }

  permute(array, f, n - 1);
}
