{
  request(
    "http://localhost:8079/" + targetFile.replace(/^build\//, ""),
    (error, response, body) => {
      mkdirp.sync(targetFile.replace(new RegExp("/[^/]*$"), ""));
      fs.writeFileSync(targetFile, body);
      cb();
    }
  );
}
