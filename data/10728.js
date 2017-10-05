{
  var xhr = new XMLHttpRequest();
  var self = this;
  xhr.open("GET", apiURL + self.currentBranch);

  xhr.onload = function() {
    self.commits = JSON.parse(xhr.responseText);
    console.log(self.commits[0].html_url);
  };

  xhr.send();
}
