{
  var value = getter ? getter.call(obj) : val;

  if (newVal === value || (newVal !== newVal && value !== value)) {
    return;
  }

  if (process.env.NODE_ENV !== "production" && customSetter) {
    customSetter();
  }

  if (setter) {
    setter.call(obj, newVal);
  } else {
    val = newVal;
  }

  childOb = !shallow && observe(newVal);
  dep.notify();
}
