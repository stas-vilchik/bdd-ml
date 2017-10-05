{
  extendOptions = extendOptions || {};
  var Super = this;
  var SuperId = Super.cid;
  var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});

  if (cachedCtors[SuperId]) {
    return cachedCtors[SuperId];
  }

  var name = extendOptions.name || Super.options.name;
  {
    if (!/^[a-zA-Z][\w-]*$/.test(name)) {
      warn(
        'Invalid component name: "' +
          name +
          '". Component names ' +
          "can only contain alphanumeric characters and the hyphen, " +
          "and must start with a letter."
      );
    }
  }

  var Sub = function VueComponent(options) {
    this._init(options);
  };

  Sub.prototype = Object.create(Super.prototype);
  Sub.prototype.constructor = Sub;
  Sub.cid = cid++;
  Sub.options = mergeOptions(Super.options, extendOptions);
  Sub["super"] = Super;

  if (Sub.options.props) {
    initProps$1(Sub);
  }

  if (Sub.options.computed) {
    initComputed$1(Sub);
  }

  Sub.extend = Super.extend;
  Sub.mixin = Super.mixin;
  Sub.use = Super.use;
  ASSET_TYPES.forEach(function(type) {
    Sub[type] = Super[type];
  });

  if (name) {
    Sub.options.components[name] = Sub;
  }

  Sub.superOptions = Super.options;
  Sub.extendOptions = extendOptions;
  Sub.sealedOptions = extend({}, Sub.options);
  cachedCtors[SuperId] = Sub;
  return Sub;
}
