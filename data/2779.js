{
  for (var item of list) {
    if (fun(item)) {
      yield item;
    }
  }
}