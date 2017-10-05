{
  if ("string" == typeof t) {
    var e = document.querySelector(t);
    return e || document.createElement("div");
  }

  return t;
}
