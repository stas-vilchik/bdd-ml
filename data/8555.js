{
  var propOptions = Ctor.options.props;

  if (isUndef(propOptions)) {
    return;
  }

  var res = {};
  var attrs = data.attrs;
  var props = data.props;

  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      {
        var keyInLowerCase = key.toLowerCase();

        if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
          tip(
            'Prop "' +
              keyInLowerCase +
              '" is passed to component ' +
              formatComponentName(tag || Ctor) +
              ", but the declared prop name is" +
              ' "' +
              key +
              '". ' +
              "Note that HTML attributes are case-insensitive and camelCased " +
              "props need to use their kebab-case equivalents when using in-DOM " +
              'templates. You should probably use "' +
              altKey +
              '" instead of "' +
              key +
              '".'
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
        checkProp(res, attrs, key, altKey, false);
    }
  }

  return res;
}
