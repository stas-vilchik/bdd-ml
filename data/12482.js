{
  var dom = this.$requireWeexModule("dom");

  this.getPosition = function(el) {
    return new Promise(function(resolve, reject) {
      dom.getComponentRect(el.ref, function(res) {
        if (!res.result) {
          reject(new Error("failed to get rect for element: " + el.tag));
        } else {
          resolve(res.size);
        }
      });
    });
  };

  var animation = this.$requireWeexModule("animation");

  this.animate = function(el, options) {
    return new Promise(function(resolve) {
      animation.transition(el.ref, options, resolve);
    });
  };
}
