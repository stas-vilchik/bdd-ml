{
  if (key === "class" || key === "style" || isReservedAttribute(key)) {
    hash = data;
  } else {
    var type = data.attrs && data.attrs.type;
    hash =
      asProp || config.mustUseProp(tag, type, key)
        ? data.domProps || (data.domProps = {})
        : data.attrs || (data.attrs = {});
  }

  if (!(key in hash)) {
    hash[key] = value[key];

    if (isSync) {
      var on = data.on || (data.on = {});

      on["update:" + key] = function($event) {
        value[key] = $event;
      };
    }
  }
}
