{
  self.commits = JSON.parse(xhr.responseText);
  console.log(self.commits[0].html_url);
}
