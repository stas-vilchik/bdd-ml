{
  vorpal
    .command("npm-publish")
    .description("After you've run grunt release, publishes the npm packages")
    .action(function(args) {
      return new Promise((resolve, reject) => {
        const currentVersion = app.getReactVersion();
        const isStable = semver.prerelease(currentVersion) === null;
        this.log(`Preparing to publish v${currentVersion}…`);

        if (isStable) {
          this.log(`"latest" dist-tag will be added to this version`);
        }

        this.prompt([
          {
            type: "confirm",
            message:
              "Did you run `grunt build` or `grunt release` and bump the version number?",
            default: false,
            name: "checklist"
          }
        ]).then(answers => {
          if (!answers.checklist) {
            return reject("Complete the build process first");
          }

          const tgz = glob.sync("build/packages/*.tgz", {
            cwd: app.config.reactPath
          });

          if (tgz.length === 0) {
            reject("No built packages found");
          }

          tgz.forEach(file => {
            this.log(app.execInRepo(`npm publish ${file} --tag=next`));
          });

          if (isStable) {
            tgz.forEach(file => {
              const pkg = path.parse(file).name;
              this.log(
                app.execInRepo(
                  `npm dist-tag add ${pkg}@${currentVersion} latest`
                )
              );
            });
          }

          resolve();
        });
      });
    });
}
