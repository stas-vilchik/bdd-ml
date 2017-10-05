{
  var adapter;

  if (typeof XMLHttpRequest !== "undefined") {
    adapter = __webpack_require__(8);
  } else if (typeof process !== "undefined") {
    adapter = __webpack_require__(8);
  }

  return adapter;
}
