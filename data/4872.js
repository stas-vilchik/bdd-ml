{
  if (dir === "/fruits") {
    setTimeout(() => callback(null, ["directory", "tomato.js"]), 0);
  } else if (dir === "/fruits/directory") {
    setTimeout(() => callback(null, ["strawberry.js"]), 0);
  }
}
