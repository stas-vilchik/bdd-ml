{
  if (item) {
    var tmp = item.split(propertyDelimiter);
    tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
  }
}
