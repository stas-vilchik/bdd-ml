{
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
}
