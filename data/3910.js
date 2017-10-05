{
  const refModels = [];

  function getType(model) {
    let type;

    if (model.schema) {
      type = model.schema.type || model.schema.$ref;
      type =
        type === "array"
          ? model.schema.items.type || model.schema.items.$ref
          : type;
    } else {
      type = model.type || model.$ref;
      type = type === "array" ? model.items.type || model.items.$ref : type;
    }

    type = type || "";
    type =
      type[0] === "#"
        ? type
            .slice(2)
            .split("/")
            .join(".")
        : type;
    return type;
  }

  function _getRefModels(model, swaggerInfo) {
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

  _getRefModels(model, swaggerInfo);

  return _.uniqBy(refModels, "_id_");
}
