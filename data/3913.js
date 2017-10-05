{
  propertie = depend.properties[propertie];
  const propertieType = getType(propertie);

  if (propertieType !== type) {
    _getRefModels(propertie, swaggerInfo);
  }
}
