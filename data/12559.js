{
  var firstItem = document.querySelector("#demo ul > .item:nth-child(1)");
  var ul = firstItem.querySelector("ul");
  return ul.children.length === 2;
}
