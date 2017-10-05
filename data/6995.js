{
  if (styles && action) {
    if (!(styles instanceof Array)) {
      styles = [styles];
    }

    Array.prototype.forEach.call(
      styles,
      function(s) {
        s.textContent = action.call(this, s.textContent);
      },
      this
    );
  }
}
