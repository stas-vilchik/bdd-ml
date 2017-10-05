{
  var nativeRaf =
    window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
  return nativeRaf
    ? function(callback) {
        return nativeRaf(function() {
          callback(performance.now());
        });
      }
    : function(callback) {
        return window.setTimeout(callback, 1e3 / 60);
      };
}
