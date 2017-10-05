{
  return app.execInRepo(`git commit -m '${msg}' ${all ? "-a" : ""}`);
}
