{
  const newDef = {};

  _.forEach(definitions, (value, key) => {
    newDef[key] = Object.assign({}, value);
  });

  _.toPairs(newDef)
    .filter(
      definitionPair =>
        !!definitionPair[1].properties || !!definitionPair[1].allOf
    )
    .forEach(definitionProps => {
      const key = definitionProps[0];
      const value = definitionProps[1];

      if (value.properties) {
        newDef[key].required = Object.keys(value.properties);
      } else if (value.allOf) {
        _.forEach(value.allOf, (item, i) => {
          if (!item.properties) return;
          newDef[key].allOf[i].required = Object.keys(item.properties);
        });
      }
    });

  return newDef;
}
