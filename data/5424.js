{
  let targetFile = file.replace(/^src/, "build");

  if (file.match(/\.js$/)) {
    targetFile = targetFile.replace(/\.js$/, ".html");
    queue.push(cb => {
      request(
        "http://localhost:8079/" + targetFile.replace(/^build\//, ""),
        (error, response, body) => {
          mkdirp.sync(targetFile.replace(new RegExp("/[^/]*$"), ""));
          fs.writeFileSync(targetFile, body);
          cb();
        }
      );
    });
  } else {
    queue.push(cb => {
      mkdirp.sync(targetFile.replace(new RegExp("/[^/]*$"), ""));
      fs.copy(file, targetFile, cb);
    });
  }
}
