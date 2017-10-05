{
  if (path[0] === "~") {
    return join(process.env.HOME, path.slice(1));
  } else {
    return resolve(path);
  }
}
