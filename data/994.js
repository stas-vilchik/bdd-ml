{
  while (someCondition) {
    const val = fn(...args);
    return val.test(() => {
      console.log(val);
    });
  }
}