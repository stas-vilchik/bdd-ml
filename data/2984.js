{
  exec("yarn -V", error => {
    if (error === null) fn();
  });
}
