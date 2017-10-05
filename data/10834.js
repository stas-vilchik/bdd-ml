{
  if (Dep.target) {
    targetStack.push(Dep.target);
  }

  Dep.target = _target;
}
