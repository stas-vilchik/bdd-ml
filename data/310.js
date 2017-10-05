{
  var adapter;

  if (typeof XMLHttpRequest !== "undefined") {
    adapter = require("./adapters/xhr");
  } else if (typeof process !== "undefined") {
    adapter = require("./adapters/http");
  }

  return adapter;
}
