{
  const storyRes = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
  return await storyRes.json();
}