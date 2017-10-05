{
  mkdirp.sync("build/jest/blog/");
  fs.writeFileSync("build/jest/blog/feed.xml", feed("rss"));
  fs.writeFileSync("build/jest/blog/atom.xml", feed("atom"));
  console.log("Generated RSS feed");
  cb();
}
