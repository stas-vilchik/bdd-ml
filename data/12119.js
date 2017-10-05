{
  if (Array.isArray(el.attrsList)) {
    el.attrsList.forEach(function(attr) {
      if (attr.name && attr.name.match(/\-/)) {
        var realName = normalizeKeyName(attr.name);

        if (el.attrsMap) {
          el.attrsMap[realName] = el.attrsMap[attr.name];
          delete el.attrsMap[attr.name];
        }

        attr.name = realName;
      }
    });
  }
}
