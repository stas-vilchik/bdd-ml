{
  const type = getType(model);

  let depend = _.get(swaggerInfo, type);

  if (refModels.length === 0) {
    refModels.push(model);
  }

  if (depend) {
    depend = _.cloneDeep(depend);
    depend.properties = depend.properties || {};
    refModels.push(depend.properties);
    Object.keys(depend.properties).forEach(propertie => {
      propertie = depend.properties[propertie];
      const propertieType = getType(propertie);

      if (propertieType !== type) {
        _getRefModels(propertie, swaggerInfo);
      }
    });
    depend.properties._id_ = type.split(".")[1];
  }
}
