{
  const original = file.get("helperGenerator");
  file.set("helperGenerator", name => {
    if (name === helperName) return false;
    return original(name);
  });
}
