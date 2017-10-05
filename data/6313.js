{
  let fieldPath = field.split(".");

  if (fieldPath.length === 1) {
    data[field] = value;
  } else {
    data[fieldPath[0]][fieldPath[1]] = "^" + value;
  }
}
