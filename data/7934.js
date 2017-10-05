{
  var value = getter ? getter.call(obj) : val;

  if (Dep.target) {
    dep.depend();

    if (childOb) {
      childOb.dep.depend();

      if (Array.isArray(value)) {
        dependArray(value);
      }
    }
  }

  return value;
}
