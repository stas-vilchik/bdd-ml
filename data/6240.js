{
  fs.writeFile(app.PATH_TO_CONFIG, JSON.stringify(answers, null, 2), err => {
    if (err) {
      this.log("Error writing config file.", err);
      reject();
    }

    resolve();
  });
}
