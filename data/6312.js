{
  let data;

  try {
    data = JSON.parse(fs.readFileSync(path, "utf8"));
  } catch (e) {
    this.log(chalk.red("ERROR") + ` ${path} doesn't exist… skipping.`);
    return;
  }

  fields.forEach(field => {
    let fieldPath = field.split(".");

    if (fieldPath.length === 1) {
      data[field] = value;
    } else {
      data[fieldPath[0]][fieldPath[1]] = "^" + value;
    }
  });
  fs.writeFileSync(path, JSON.stringify(data, null, 2) + "\n");
}
