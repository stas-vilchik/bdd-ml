{
  function* map(list, fun) {
    for (var item of list) {
      yield fun(item);
    }
  }

  function* filter(list, fun) {
    for (var item of list) {
      if (fun(item)) {
        yield item;
      }
    }
  }

  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return map(
    filter(numbers, function(x) {
      return x % 2 == 0;
    }),
    function(x) {
      return x * x + ",";
    }
  );
}
