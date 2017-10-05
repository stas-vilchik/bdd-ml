{
  if (paramNames[index]) {
    params[paramNames[index].name] = c ? util.safeDecodeURIComponent(c) : c;
  }
}
