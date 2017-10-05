{
  if (!item.properties) return;
  newDef[key].allOf[i].required = Object.keys(item.properties);
}
