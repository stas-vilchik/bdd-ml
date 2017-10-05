{
  if (typeof el === "string") {
    var selected = document.querySelector(el);

    if (!selected) {
      process.env.NODE_ENV !== "production" &&
        warn("Cannot find element: " + el);
      return document.createElement("div");
    }

    return selected;
  } else {
    return el;
  }
}
