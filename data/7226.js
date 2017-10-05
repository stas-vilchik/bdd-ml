{
  var style = document.createElement("style");
  style.textContent =
    "" +
    "body {" +
    "transition: opacity ease-in 0.2s;" +
    " } \n" +
    "body[unresolved] {" +
    "opacity: 0; display: block; overflow: hidden; position: relative;" +
    " } \n";
  var head = document.querySelector("head");
  head.insertBefore(style, head.firstChild);
}
