{
  let opts = [remote, refspec, tags ? "--tags" : ""];
  return app.execInRepo(`git push ${opts.join(" ")}`);
}
