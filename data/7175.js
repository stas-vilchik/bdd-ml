{
  if (inRoot.__observer) {
    return;
  }

  var observer = new MutationObserver(handler);
  observer.observe(inRoot, {
    childList: true,
    subtree: true
  });
  inRoot.__observer = observer;
}
