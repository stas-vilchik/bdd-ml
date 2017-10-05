{
  if (!frame.initialized) {
    initFrame();
  }

  document.body.appendChild(frame);
  fn(frame.contentDocument);
  document.body.removeChild(frame);
}
