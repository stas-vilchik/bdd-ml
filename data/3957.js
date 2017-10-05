{
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    S.Shape.shuffleIdle();
    reset(true);
  }, 500);
}
