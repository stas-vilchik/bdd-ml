{
  if (thisArg && typeof val === "function") {
    a[key] = bind(val, thisArg);
  } else {
    a[key] = val;
  }
}
