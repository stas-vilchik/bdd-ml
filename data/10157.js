{
  if (value) {
    if (!isPlainObject(value)) {
      "development" !== "production" &&
        warn("v-on without argument expects an Object value", this);
    } else {
      var on = (data.on = data.on ? extend({}, data.on) : {});

      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(ours, existing) : ours;
      }
    }
  }

  return data;
}
