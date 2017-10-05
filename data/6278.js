{
  cherryPickPRs
    .call(this, app, pulls)
    .then(results => {
      resolve(results);
    })
    .catch(err => {
      this.log(
        `${chalk.red.bold("ERROR")} Something went wrong and your repo is` +
          ` probably in a bad state. Sorry.`
      );
      resolve({
        successful: [],
        skipped: [],
        didAbort: true
      });
    });
}
