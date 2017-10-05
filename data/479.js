{
  window.addEventListener("unhandledrejection", function() {
    done.fail("Unhandled rejection.");
  });
  source.cancel();
  setTimeout(done, 100);
}
