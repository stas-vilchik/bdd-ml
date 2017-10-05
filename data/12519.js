{
  var options = this.$options;

  if (options.el) {
    var dataOption = options.data;
    var internalData =
      (typeof dataOption === "function" ? dataOption() : dataOption) || {};
    options.data = Object.assign(internalData, instance.data);
    instance.app = this;
  }
}
