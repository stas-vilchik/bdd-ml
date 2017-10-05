{
  this.config = this.loadConfig();
  this.PATH_TO_CONFIG = PATH_TO_CONFIG;
  this.github = new GitHubAPI({
    token: this.config.githubToken
  });
  this.ghrepo = this.github.getRepo("facebook", "react");
  this.ghissues = this.github.getIssues("facebook", "react");
  this.writeTo = writeTo;
  this.execInRepo = execInRepo;
  this.getReactVersion = getReactVersion;
  COMMANDS.forEach(command => {
    vorpal.use(require(`./commands/${command}`)(vorpal, app));
  });
  var v = vorpal.history("react-release-manager").delimiter("rrm \u2234");
  v.exec("help");
  v.show();
}
