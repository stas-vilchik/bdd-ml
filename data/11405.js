{
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, "transformCode");
  this.dataGenFns = pluckModuleFunction(options.modules, "genData");
  this.directives = extend(extend({}, baseDirectives$1), options.directives);
  var isReservedTag = options.isReservedTag || no;

  this.maybeComponent = function(el) {
    return !isReservedTag(el.tag);
  };

  this.onceId = 0;
  this.staticRenderFns = [];
}
