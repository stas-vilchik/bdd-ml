{
  try {
    let config = JSON.parse(fs.readFileSync(PATH_TO_CONFIG, "utf8"));
    config.reactPath = path.normalize(untildify(config.reactPath));
    PATH_TO_REPO = config.reactPath;
    return config;
  } catch (e) {
    console.error(
      "Attempt to load config file failed. Please run `init` command for initial setup or make sure " +
        "~/.react-release-manager.json is valid JSON. Using a default config which may not work " +
        "properly."
    );
    return DEFAULT_CONFIG;
  }
}
