{
  type = type || "rss";
  const posts = Object.create(null);
  fs.readdirSync(blogFolder).forEach(file => {
    posts[file.substring(0, 10)] = retrieveMetaData(file);
  });
  const allPosts = Object.keys(posts)
    .sort()
    .reverse();
  const feed = new Feed({
    title: "Jest Blog",
    description:
      "The best place to stay up-to-date with the latest Jest news and events.",
    id: blogRootURL,
    link: blogRootURL,
    image: jestImage,
    copyright: "Copyright © " + new Date().getFullYear() + " Facebook Inc.",
    updated: new Date(allPosts[0] + "T06:00:00")
  });
  allPosts.forEach(key => {
    const post = posts[key];
    feed.addItem({
      title: post.title,
      link: post.url,
      author: [
        {
          name: post.author,
          link: post.authorURL
        }
      ],
      date: new Date(key + "T06:00:00"),
      description: post.description
    });
  });
  return type === "rss" ? feed.render("rss-2.0") : feed.render("atom-1.0");
}
