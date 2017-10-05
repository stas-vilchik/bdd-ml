{
  let data = {
    title: `npm access request: ${username}`,
    body: `In order to publish React to npm I need access to the following repositories:
${packages.map(pkg => `- [${pkg}](https://npm.im/${pkg})`).join("\n")}`
  };
  return `https://github.com/facebook/react/issues/new?${querystring.stringify(
    data
  )}`;
}
