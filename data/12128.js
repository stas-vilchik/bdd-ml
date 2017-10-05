{
  if (currentRecycleList) {
    if (el.tag === "text") {
      transformText(el);
    }
  }

  if (el === currentRecycleList) {
    currentRecycleList = null;
  }
}
