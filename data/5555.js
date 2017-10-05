{
  const topStoriesRes = await fetch('https://hacker-news.firebaseio.com/v0/topstories.js');
  const topStoriesIds = await topStoriesRes.json();
  const topStories = [];

  for (let i = 0; i < stories; i++) {
    const topStoriesId = topStoriesIds[i];
    topStories.push((await getStory(topStoriesId)));
  }

  writeFileSync('top-stories.json', `window.stories = ${JSON.stringify(topStories)}`);
}