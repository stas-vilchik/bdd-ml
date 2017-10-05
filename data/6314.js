{
  vorpal
    .command("version")
    .description("Update the version of React, useful while publishing")
    .action(function(args, actionCB) {
      let currentVersion = app.getReactVersion();
      let choices = ["prerelease", "patch", "minor", "major"].map(release => {
        let version = semver.inc(currentVersion, release);
        return {
          value: version,
          name: `${chalk.bold(version)} (${release})`
        };
      });
      choices.push("Other");
      this.prompt([
        {
          type: "list",
          name: "version",
          choices: choices,
          message: `New version (currently ${chalk.bold(currentVersion)}):`
        },
        {
          type: "input",
          name: "version",
          message: `New version (currently ${chalk.bold(currentVersion)}): `,
          when: res => res.version === "Other"
        }
      ]).then(res => {
        let newVersion = semver.valid(res.version);

        if (!newVersion) {
          return actionCB(
            `${chalk.red("ERROR")} ${res.version} is not a semver-valid version`
          );
        }

        this.log(`Updating to ${newVersion}`);
        [
          {
            file: "package.json",
            fields: ["version"]
          },
          {
            file: "npm-shrinkwrap.json",
            fields: ["version"]
          },
          {
            file: "packages/react/package.json",
            fields: ["version"]
          },
          {
            file: "packages/react-addons/package.json",
            fields: ["version", "peerDependencies.react"]
          },
          {
            file: "packages/react-dom/package.json",
            fields: ["version", "peerDependencies.react"]
          },
          {
            file: "packages/react-native-renderer/package.json",
            fields: ["version", "peerDependencies.react"]
          },
          {
            file: "packages/react-noop-renderer/package.json",
            fields: ["version"]
          },
          {
            file: "packages/react-test-renderer/package.json",
            fields: ["version", "peerDependencies.react"]
          }
        ].forEach(opts => {
          updateJSON.apply(this, [
            path.join(app.config.reactPath, opts.file),
            opts.fields,
            newVersion
          ]);
        });
        const PATH_TO_REACTVERSION = path.join(
          app.config.reactPath,
          "src/ReactVersion.js"
        );
        let reactVersionContents = fs.readFileSync(
          PATH_TO_REACTVERSION,
          "utf8"
        );
        reactVersionContents = reactVersionContents.replace(
          currentVersion,
          newVersion
        );
        fs.writeFileSync(PATH_TO_REACTVERSION, reactVersionContents);
        this.prompt([
          {
            name: "commit",
            type: "confirm",
            message: "Commit these changes (`git commit -a`)?",
            default: true
          },
          {
            name: "tag",
            type: "confirm",
            message:
              "Tag the version commit (not necessary for non-stable releases)?",
            default: true,
            when: res => res.commit
          }
        ]).then(res => {
          if (res.commit) {
            git.commit(app, newVersion, true);
          }

          if (res.tag) {
            git.tag(app, `v${newVersion}`);
          }

          actionCB();
        });
      });
    });
}
